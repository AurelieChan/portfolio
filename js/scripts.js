import { languages, contactPlaceholder } from './languages.js';

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
function details(project) {

  const projectWindow = document.querySelectorAll(".display-project");

  // Close any potentially opened project window
  projectWindow.forEach(window => window.style.display = "none");

  // open selected project window
  const projectElement = document.getElementById(`${project}`);
  const videoElement = projectElement.querySelector('video');

    projectElement.setAttribute('tabindex', '-1');
    requestAnimationFrame(() => projectElement.focus());

  videoElement.oncanplay = () => {
    projectElement.style.display = "block";
    document.getElementById('display-pro').style.display = "block";
  };

  if (videoElement.readyState >= 3) { 
    projectElement.style.display = "block";
    document.getElementById('display-pro').style.display = "block";
  } else {
    videoElement.load();
  }

  // Hide project section
  document.querySelector('#projects-section').classList.remove('section-fade-in');
  document.querySelector('#projects-section').style.opacity = 0;
}

function closeDetails(project) {

  // close project window
  document.getElementById(`${project}`).style.display = "none";
  document.getElementById('display-pro').style.display = "none"; // Scroll

  // Show project section
  const projectSection = document.querySelector('#projects-section');

  projectSection.classList.add('section-fade-in');
  projectSection.style.opacity = 1;
  projectSection.focus();
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

  var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
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
      '&message=' + encodeURIComponent(message)
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
