// ==================================================================== Projects

function details(project) {

  const projectWindow = document.querySelectorAll(".display-project");

  // Close any potentially opened project window
  for (let i = 0; i < projectWindow.length; i++) {
    projectWindow[i].style.display = "none";
  }

  // open selected project window
  document.getElementById(`${project}`).style.display = "block";
  document.getElementById('display-pro').style.display = "block"; // Scroll

  // Hide project section
  document.querySelector('#projects-section').classList.remove('section-fade-in');
  document.querySelector('#projects-section').style.opacity = 0;
}

function closeDetails(project) {

  // close project window
  document.getElementById(`${project}`).style.display = "none";
  document.getElementById('display-pro').style.display = "none"; // Scroll

  // Show project section
  document.querySelector('#projects-section').classList.add('section-fade-in');
  document.querySelector('#projects-section').style.opacity = 1;
}

// ================================================= Detect subdomain (language)

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

// =================================================================== Languages

// // get user's navigator default language
// var navLang = localStorage.getItem('lang') || navigator.language.slice(0, 2);

// // check if navLang is in the languages library, else put english as default
// if (Object.keys(languages).includes(navLang)) {
//   selectLanguage(navLang)
// }
// else {
//   selectLanguage('en')
// }

document.addEventListener('DOMContentLoaded', function() {
  var subdomain = getSubdomain();
  if (subdomain && ['en', 'de', 'fr'].includes(subdomain)) { 
      selectLanguage(subdomain);
  } else {
      selectLanguage('en');
  }
});

function selectLanguage(lan) {
  var currentURL = window.location.href;
  var baseURL = currentURL.replace(window.location.hostname, lang + '.example.com');
  window.location.href = baseURL;
  // var translate = document.getElementsByClassName('lang');

  // // Translate each sentence of the website
  // Array.prototype.forEach.call(translate, function(el, index, array){
  //   let key = el.getAttribute('key')
  //   el.innerHTML = languages[lan][key];
  // });

  // // Save preference in the localStorage
  // localStorage.setItem('lang', lan)

  // // Translate placeholder of the contact form
  // contactPlaceholder(lan)
}

// ================================================================ Contact form

function submitForm() {

  var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
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

    http.open("POST", "http://localhost:8000/php/index.php", true);
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
