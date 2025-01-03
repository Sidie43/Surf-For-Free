// sélectionner le parent "pays"
const header = document.querySelector('.header-section');

const dropdown = document.querySelector('.dropdown-container');

const dropdownTrigger =  document.querySelector('.dropdown-trigger');

const dropdownMenu = document.querySelector('.dropdown-menu');

const installationSection = document.querySelector('.installation-guide');

const navbarIcon = document.getElementById('navbar-icon');

const navList = document.getElementById('nav-list');

const icon = document.getElementById('icon');

// funtion pour afficher le navbar lorsqu'on click sur le logo
icon.addEventListener('click', (event) => {
  event.preventDefault();
  navList.style.right = '0';
  navList.style.display = 'flex';
  navbarIcon.style.display ='none';
});


// Fonction pour empêcher le défilement horizontal
function preventHorizontalScroll() {
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';
}

// Fonction pour empêcher le défilement horizontal
function allowHorizontalScroll() {
  document.documentElement.style.overflowX = '';
  document.body.style.overflowX = '';
}






// Ajouter un écouter dévénement pour le click
dropdown.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('open');
  dropdownTrigger.style.textDecoration = 'none';
  dropdownMenu.style.right = '0'
});

// donner de la couleur au header en cas de scroll

function allowHorizontalScroll() {
  document.body.style.overflowX = 'auto';
}

function preventHorizontalScroll() {
  document.body.style.overflowX = 'hidden';
}

window.addEventListener('scroll', () => {
  const sectionPosition = installationSection.getBoundingClientRect();
  const isInstallationVisible = sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0;

  if (window.scrollY > 0 && !dropdown.classList.contains('open') && !isInstallationVisible) {
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.backgroundColor = '#d3e8fc';
    header.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    allowHorizontalScroll();
  } else {
    header.style.position = 'relative';
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
    preventHorizontalScroll();
  }
});


// rédirection des pays
function coteIvoire() {
  window.location.href = 'Sff-côte-ivoire.html';
}

function cameroun() {
  window.location.href = 'Sff-cameroun.html';
}

function senegal() {
  window.location.href = 'Sff-sénégal.html';
}

function burkina() {
  window.location.href = 'Sff-burkina-faso.html';
}

function mali() {
  window.location.href = 'Sff-mali.html';
}

function niger() {
  window.location.href = 'Sff-niger.html';
}

function guinee() {
  window.location.href = 'Sff-guinée.html';
}

function togo() {
  window.location.href = 'Sff-togo.html';
}

function bénin() {
  window.location.href = 'Sff-bénin.html';
}

function congoRd() {
  window.location.href = 'Sff-rd-congo.html';
}

function congoRépublique() {
  window.location.href = 'Sff-république-congo.html';
}

function algerie() {
  window.location.href = 'Sff-algerie.html';
}

function tunisie() {
  window.location.href = 'Sff-tunisie.html';
}

function madagascar() {
  window.location.href = 'Sff-madagascar.html';
}

function nigeria() {
  window.location.href = 'Sff-nigeria.html';
}

function sudAfric() {
  window.location.href = 'Sff-afrique-sud.html';
}


// Sélctionner tous éléments FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.fat-question');

  question.addEventListener('click', () => {
    // Fermer les autres FAQ ouvertes
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    //Activer ou désactiver la FAQ actuelle
    item.classList.toggle('active');
  });
});


const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Fonction pour afficher le témoignage actif
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Bouton "Suivant"
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Bouton "Précédent"
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Initialiser le premier témoignage
showTestimonial(currentIndex);


// // changer le background-image de l'hero section
// const heroSection = document.getElementById('hero-section');

// // List des url des images de fond
// const backgroundImages = [
//   'https://res.cloudinary.com/ddqfmqin7/image/upload/v1734443794/cyber-security-technology-online-data-protection_31965-14169.jpg_gvsktn.jpg',

//   // 'https://res.cloudinary.com/ddqfmqin7/image/upload/v1734482463/agjstf383ifjcfqinbaa.jpg',

//   // 'https://res.cloudinary.com/ddqfmqin7/image/upload/v1734483584/images_ubuo56.jpg',

//   // 'https://res.cloudinary.com/ddqfmqin7/image/upload/v1734486591/images_enfbbh.jpg'
// ];

// let currentImageIndex = 0;

// // Fontion pour changer l'image
// function changeHeroImage() {
//   heroSection.style.opacity = 1;
//   setTimeout(() => {
//     currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
//     heroSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
//     heroSection.style.opacity = '1';
//   }, 1000);
// }

// // Lance de changement toutes les 5s
// setInterval(changeHeroImage, 10000);


// rédirestion lorsque le client clique sur le boutton prenium

const countryRedirects = {
  CI: "Sff-côte-ivoire.html",
  // CM: "Sff-cameroun.html",
  // SN: "Sff-sénégal.html",
  // BF: "Sff-burkina-faso.html",
  // ML: "Sff-mali.html",
  // NE: "Sff-niger.html", 
  // GN: "Sff-guinée.html", 
  // TG: "Sff-togo.html", 
  // BJ: "Sff-bénin.html",
  // CD: "Sff-rd-congo.html", 
  // CG: "Sff-république-congo.html", 
  // DZ: "Sff-algerie.html",
  // TN: "Sff-tunisie.html",
  // MG: "Sff-madagascar.html", 
  // NG: "Sff-nigeria.html", 
  // ZA: "Sff-afrique-sud.html",
}

//Bouton pour afficher l'offre prenium 
const preniumBtn = document.getElementById('preniumBtn');

preniumBtn.addEventListener('click', async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    if (data && data.country_code)  {
      const userCountryCode = data.country_code.toUpperCase();

      if (countryRedirects[userCountryCode]) {
        window.location.href = countryRedirects[userCountryCode];
      } else {
        alert("Désolé, les fichiers VPN pour votre pays ne sont pas disponibles pour l'instant. Vous pouvez vérifié la list des pays dans la section pays");
      }
    } else {
      alert("Impossible de détecter votre pays. Veuillez réessayer.");
    }
  } catch (error) {
    console.error("Erreur lors de la détection de l'adresse IP :", error);
    alert("Erreur lors de la détection de votre pays. Veuillez réessayer.");
  }
});



// Initialisation des variables pour le formulaire gratuit
const texteArea = document.getElementById('vpnId-textarea');
const updateButton = document.getElementById('updateButton');
const confirmIcon = document.querySelector('.confirme-action');
const modal = document.getElementById('free-modal');
const closeModal = document.getElementById('close-free-modal');
const whatsappBtn = document.getElementById('whatsapp-btn');
const telegramBtn = document.getElementById('telegram-btn');
const freeBtn = document.getElementById('freeBtn');
const freeBtn2 = document.getElementById('freeBtn2');
let dataId;
let isVpnIdConfirmed = false; // Pour le formulaire gratuit

// Gestion des tickets
let ticketCount = parseInt(localStorage.getItem('ticketCount')) || 1;
let lastResetDate = localStorage.getItem('lastResetDate') || getFormattedDate(new Date());

if (lastResetDate !== getFormattedDate(new Date())) {
  ticketCount = 1;
  localStorage.setItem('ticketCount', ticketCount);
  localStorage.setItem('lastResetDate', getFormattedDate(new Date()));
}

// Gestion de l'entrée dans le champ texte
texteArea.addEventListener('input', () => {
  if (texteArea.value.trim() === '') {
    resetTextAreaStyles(texteArea, updateButton, confirmIcon);
  } else {
    adjustTextAreaHeight(texteArea);
  }
});

// Confirmation de l'ID VPN
updateButton.addEventListener('click', () => {
  const textAreaValue = texteArea.value.trim();
  if (textAreaValue === '') {
    alert('Veuillez entrer votre ID VPN avant de confirmer.');
    return;
  }
  dataId = textAreaValue;
  updateButton.setAttribute('data-vpnId', textAreaValue);
  confirmIcon.style.display = 'inline-block';
  updateButton.style.backgroundColor = '#02e002';
  isVpnIdConfirmed = true; // Marque l'ID comme confirmé
});

// Ouverture et fermeture du modal
freeBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

freeBtn2.addEventListener('click', () => {
  modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Bouton WhatsApp
whatsappBtn.addEventListener('click', () => {
  if (!isVpnIdConfirmed) {
    alert('Veuillez cliquer sur "Enregistrer" pour valider votre ID VPN avant de continuer.');
    return;
  }
  if (validateVpnId(texteArea)) {
    sendMessage('WhatsAppWeb', freeBtn.getAttribute('data-file'), freeBtn.getAttribute('data-option'), freeBtn.getAttribute('data-price'), dataId, ticketCount++);
  }
});

// Bouton Telegram
telegramBtn.addEventListener('click', () => {
  if (!isVpnIdConfirmed) {
    alert('Veuillez cliquer sur "Enregistrer" pour valider votre ID VPN avant de continuer.');
    return;
  }
  if (validateVpnId(texteArea)) {
    sendMessage('TelegramWeb', freeBtn.getAttribute('data-file'), freeBtn.getAttribute('data-option'), freeBtn.getAttribute('data-price'), dataId, ticketCount++);
  }
});

// Fonction utilitaires
function validateVpnId(input) {
  const vpnId = input.value.trim();
  if (vpnId === '') {
    alert('Veuillez entrer votre ID VPN dans le champ prévu.');
    return false;
  }
  return true;
}

function sendMessage(platform, file, option, price, vpnId, ticket) {
  localStorage.setItem('ticketCount', ticket);
  const now = new Date();
  const formattedDate = getFormattedDate(now);
  const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  let salutation;
  const hour = now.getHours();
  if (hour >= 5 && hour < 12) {
    salutation = '𝘽𝙊𝙉𝙅𝙊𝙐𝙍';
  } else if (hour >= 12 && hour < 18) {
    salutation = '𝘽𝙊𝙉𝙉𝙀 𝘼𝙋𝙍𝙀̀𝙎-𝙈𝙄𝘿𝙄';
  } else {
    salutation = '𝘽𝙊𝙉𝙎𝙊𝙄𝙍';
  }

  const userMessage = encodeURIComponent(`
TICKET: ${ticket} du ${formattedDate} ${formattedTime}

${salutation}, 𝙅𝙀 𝙑𝙀𝙐𝙓 𝙐𝙉 𝙁𝙄𝘾𝙃𝙄𝙀𝙍:


- Nom du fichier: ${file}

- Pass: ${option}

- Prix: ${price}

- VPN ID: ${vpnId}
`);

  const redirectURL =
    platform === 'WhatsAppWeb'
      ? `https://wa.me/?text=${userMessage}`
      : `https://t.me/Payment_FreeSurf?text=${userMessage}`;
  const isMobile = /iphone|android/i.test(navigator.userAgent);

  if (!isMobile) {
    alert(`Vous serez redirigé vers ${platform}. Assurez-vous d'être connecté.`);
  }
  window.open(redirectURL, '_blank');
  modal.classList.remove('active');
  texteArea.value = '';
  confirmIcon.style.display = 'none';
  updateButton.style.backgroundColor = '#ffc107';
  isVpnIdConfirmed = false; // Réinitialise la confirmation
}

function resetTextAreaStyles(textArea, button, icon) {
  textArea.style.height = '20px';
  textArea.style.padding = '0.5rem';
  button.style.backgroundColor = '#ffc107';
  icon.style.display = 'none';
}

function adjustTextAreaHeight(textArea) {
  textArea.style.height = 'auto';
  textArea.style.height = `${textArea.scrollHeight}px`;
  textArea.style.padding = '5px';
}

function getFormattedDate(date) {
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}



// redirection vers la page de contact
function goToContactPage() {
  window.location.href = 'Sff-contact.html';
}

function telegramGroup() {
  window.open('https://t.me/TechnologieGaig', '_blank');
}