const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const navigationLinks = document.querySelectorAll('.site-nav a');
const revealElements = document.querySelectorAll('.reveal');
const currentYear = document.querySelector('#current-year');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach((card) => {
      const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.classList.toggle('filtered-out', !shouldShow);
    });
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}


const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('figcaption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
const lightboxPrevious = lightbox?.querySelector('.lightbox-prev');
const lightboxNext = lightbox?.querySelector('.lightbox-next');
const galleryLinks = Array.from(document.querySelectorAll('[data-lightbox]'));
let activeGallery = [];
let activeImageIndex = 0;
let lastFocusedGalleryLink = null;

function renderLightboxImage() {
  const link = activeGallery[activeImageIndex];
  if (!link || !lightboxImage || !lightboxCaption) return;
  const image = link.querySelector('img');
  lightboxImage.src = link.href;
  lightboxImage.alt = image?.alt || '';
  lightboxCaption.textContent = link.dataset.caption || image?.alt || '';
}

function openLightbox(link) {
  if (!lightbox) return;
  const gallery = link.closest('[data-gallery]');
  activeGallery = gallery ? Array.from(gallery.querySelectorAll('[data-lightbox]')) : [link];
  activeImageIndex = Math.max(0, activeGallery.indexOf(link));
  lastFocusedGalleryLink = link;
  renderLightboxImage();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-active');
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-active');
  if (lightboxImage) lightboxImage.src = '';
  lastFocusedGalleryLink?.focus();
}

function moveLightbox(direction) {
  if (!activeGallery.length) return;
  activeImageIndex = (activeImageIndex + direction + activeGallery.length) % activeGallery.length;
  renderLightboxImage();
}

galleryLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openLightbox(link);
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxPrevious?.addEventListener('click', () => moveLightbox(-1));
lightboxNext?.addEventListener('click', () => moveLightbox(1));
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (!lightbox?.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') moveLightbox(-1);
  if (event.key === 'ArrowRight') moveLightbox(1);
});
