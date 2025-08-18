import { languages, contactPlaceholder } from './languages.js';
import { AnimTitles } from './main.js';

// ============================================================= Event listeners
document.addEventListener('DOMContentLoaded', () => {

  // Projects section
  const showProject = document.querySelectorAll('.grid-item, .prev, .next');
  showProject.forEach(item => {
    item.addEventListener('click', () => {
      const project = item.getAttribute('data-project-id');
      details(project);
    });
  });

  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
          const project = closeButton.getAttribute('data-close-id');
          closeDetails(project);
      });
  });

  document.querySelectorAll('nav .nb').forEach(nb => {
    nb.addEventListener('click', () => {
      closeAllProjects();
    });
  });

  // Handle languages
  const langButtons = ['en', 'de', 'fr'];
  langButtons.forEach(lang => {
      document.getElementById(lang).addEventListener('click', () => changeUrl(lang));
  });

  var subdomain = getSubdomain();
  if (subdomain && ['en', 'de', 'fr'].includes(subdomain)) { 
      selectLanguage(subdomain);
  } else {
      selectLanguage('en');
  }

  // Set the language field in the contact form
  const langInput = document.getElementById('lang');
  if (langInput) {
      langInput.value = subdomain;
  }

  // Submit contact form
  const submitButton = document.getElementById('submit');
  if (submitButton) {
      submitButton.addEventListener('click', submitForm);
  }

  // Accessibility button to get back to navbar
  const nav = document.querySelector('nav[role="navigation"]') || document.querySelector('nav');
  const backBtn = document.getElementById('back-to-nav');
  const sections = document.querySelectorAll('section, .display-project');

  if (nav && !nav.hasAttribute('tabindex')) nav.setAttribute('tabindex', '-1');

  // Always place the button at the end of whichever section currently has focus inside it
  const parkBtnAtEnd = (container) => {
    if (!backBtn || !container) return;
    if (backBtn.parentElement !== container) {
      container.appendChild(backBtn);
    }
  };

  sections.forEach(sec => {
    sec.addEventListener('focusin', () => parkBtnAtEnd(sec));
  });

  if (backBtn && nav) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nav.focus();
    });
  }
});

// ==================================================================== Projects
let currentProjectId = null;
let lastOpenToken = 0;

// Close everything safely
function closeAllProjects() {
  document.querySelectorAll('.display-project').forEach(sec => {
    // cancel any pending oncanplay for its video
    const vid = sec.querySelector('video');
    if (vid) {
      vid.oncanplay = null; 
      try { vid.pause(); } catch(e){}
      vid.currentTime = 0;  
    }
    sec.style.display = "none";
    delete sec.dataset.openToken;
  });
  const overlay = document.getElementById('display-pro');
  if (overlay) overlay.style.display = "none";
  currentProjectId = null;
}

function details(projectId) {
  closeAllProjects();

  const projectElement = document.getElementById(projectId);
  if (!projectElement) return;

  const overlay = document.getElementById('display-pro');
  const videoElement = projectElement.querySelector('video');

  currentProjectId = projectId;

  // Create a fresh token for THIS open attempt
  const myToken = String(++lastOpenToken);
  projectElement.dataset.openToken = myToken;

  // === Reveal immediately (optimistic)
  projectElement.style.display = "block"; 
  if (overlay) overlay.style.display = "block";
  projectElement.setAttribute('tabindex', '-1');
  requestAnimationFrame(() => projectElement.focus());
  AnimTitles(projectId);

  // Handle video loading if needed
  if (videoElement) {
    // Prevent old handler from firing
    videoElement.oncanplay = null;

    if (videoElement.readyState < 3) {
      videoElement.oncanplay = () => {
        // Ensure this is still the active open request
        if (projectElement.dataset.openToken !== myToken) return;
        videoElement.oncanplay = null;
        // Optionally: auto-play or do nothing
      };
      videoElement.load();
    }
  }

  // Visually hide the projects grid
  const projectsSection = document.querySelector('#projects-section');
  if (projectsSection) {
    projectsSection.classList.remove('section-fade-in');
    projectsSection.style.opacity = 0;
  }
}

function closeDetails(projectId) {
  const sec = document.getElementById(projectId);
  if (sec) {
    // cancel pending video handler
    const vid = sec.querySelector('video');
    if (vid) {
      vid.oncanplay = null;
      try { vid.pause(); } catch(e){}
      vid.currentTime = 0;
    }
    // hide just this one
    sec.style.display = "none";
    delete sec.dataset.openToken;
  }

  // If no projects are visible anymore, hide overlay
  const anyOpen = Array.from(document.querySelectorAll('.display-project'))
    .some(s => s.style.display !== 'none');
  if (!anyOpen) {
    const overlay = document.getElementById('display-pro');
    if (overlay) overlay.style.display = "none";
    currentProjectId = null;
  }

  // Restore the projects section
  const projectsSection = document.querySelector('#projects-section');
  if (projectsSection) {
    projectsSection.classList.add('section-fade-in');
    // AnimTitles('projects-section')
    projectsSection.style.opacity = 1;
    projectsSection.focus();
    setTimeout(() => {
      AnimTitles('projects-section');
    }, 30);
  }
}

// =================================================================== Languages
function getSubdomain() {
  var hostname = window.location.hostname;
  var parts = hostname.split('.');
  var subdomain = parts[0]; // en, de or fr

  // Check if www or only 2 parts, as example.de 
  if (subdomain === 'www' || parts.length < 3) {
      subdomain = null; 
  }
  return subdomain;
}

function changeUrl(lang) {
  var currentURL = window.location.href;
  var baseURL = currentURL.replace(window.location.hostname, lang + '.aureliechan.de');
  window.location.href = baseURL;
}

export function selectLanguage(lang) {
  const translations = languages[lang];

  document.querySelectorAll('[key].lang').forEach(el => {
    const key = el.getAttribute('key');
    const attr = el.getAttribute('data-attr'); // e.g., "aria-label"

    if (!translations || !translations[key]) return;

    if (attr) {
      el.setAttribute(attr, translations[key]);
    } else {
      el.innerHTML = translations[key];
    }
  });

  // Translate placeholder of the contact form
  contactPlaceholder(lang);
}

// ================================================================ Contact form
function submitForm() {

  const lang = getSubdomain() || 'en';
  document.getElementById('lang').value = lang; 

  var errorMsgName = languages[lang]["errorName"];
  var errorMsgEmail = languages[lang]["errorEmail"];
  var errorMsgMessage = languages[lang]["errorMessage"];

  if(!document.querySelector("#name").value) {
    document.querySelector('#sent-msg').textContent = errorMsgName;
    document.querySelector('#sent-msg').style.display = 'block';
  }
  else if(!document.querySelector("#email").value) {
    document.querySelector('#sent-msg').textContent = errorMsgEmail;
    document.querySelector('#sent-msg').style.display = 'block';
  }
  else if(!document.querySelector("#message").value) {
    document.querySelector('#sent-msg').textContent = errorMsgMessage;
    document.querySelector('#sent-msg').style.display = 'block';
  }
  else {
    var name = document.querySelector("#name").value;
    var company = document.querySelector("#company").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;

    var http = new XMLHttpRequest()

    http.open("POST", "https://aureliechan.de/php/index.php", true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    http.send(
      'name=' + (name) +
      '&company=' + encodeURIComponent(company) +
      '&email=' + encodeURIComponent(email) +
      '&message=' + encodeURIComponent(message) +
      '&lang=' + encodeURIComponent(lang)
    )

    http.onreadystatechange = function() {
      // Show message from backend
      document.querySelector('#sent-msg').textContent = http.responseText;
      document.querySelector('#sent-msg').style.display = 'block';

      if(http.readyState == 4 && http.status == 200) { // if sent successfully
        document.querySelector('#sent-msg').style.color = "#b4ffe7"; // green color

        setTimeout(() => { // reset form and message
          document.querySelector('#contact-form').reset();
          document.querySelector('#sent-msg').style.display = 'none';
        }, 5000);

      }
    }
  }
}