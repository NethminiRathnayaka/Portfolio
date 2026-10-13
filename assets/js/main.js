// Interactive JavaScript for Dual-Persona Portfolio (Nethmini Sandunika Rathnayaka)

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Blur
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Persona Switcher (Tech Specialist vs Vocalist/Singer)
  const techBtn = document.getElementById('persona-tech-btn');
  const singerBtn = document.getElementById('persona-singer-btn');
  const heroBadge = document.getElementById('hero-persona-badge');
  const heroRole = document.getElementById('hero-persona-role');
  const heroDescription = document.getElementById('hero-persona-desc');
  const heroPrimaryBtn = document.getElementById('hero-primary-action');

  if (techBtn && singerBtn) {
    techBtn.addEventListener('click', () => {
      setPersona('tech');
    });

    singerBtn.addEventListener('click', () => {
      setPersona('singer');
    });
  }

  function setPersona(mode) {
    const profileImg = document.getElementById('profile-img');

    if (mode === 'tech') {
      techBtn.classList.add('active');
      singerBtn.classList.remove('active');

      heroBadge.className = 'badge-pill';
      heroBadge.innerHTML = '<i class="fa-solid fa-code"></i> Software Engineering & QA';
      
      heroRole.className = 'gradient-text-tech';
      heroRole.textContent = 'Software Engineer & QA Analyst';

      heroDescription.textContent = 'Specialized in Software Engineering, QA Testing, and ERP Coordination. Passionate about architecting reliable web systems and research-driven software solutions.';

      heroPrimaryBtn.className = 'btn btn-primary';
      heroPrimaryBtn.innerHTML = '<i class="fa-solid fa-laptop-code"></i> Explore Projects';
      heroPrimaryBtn.setAttribute('href', '#projects');

      if (profileImg) {
        profileImg.src = 'assets/images/profile_grad.jpg';
      }
    } else {
      singerBtn.classList.add('active');
      techBtn.classList.remove('active');

      heroBadge.className = 'badge-pill music';
      heroBadge.innerHTML = '<i class="fa-solid fa-music"></i> Vocalist & Musical Artist';

      heroRole.className = 'gradient-text-music';
      heroRole.textContent = 'Vocalist & Stage Performer';

      heroDescription.textContent = 'UMS Distinction Graduate and Visharada Diploma candidate. Expressing soulful acoustic melodies, classical ragas, and dynamic live stage performances.';

      heroPrimaryBtn.className = 'btn btn-music';
      heroPrimaryBtn.innerHTML = '<i class="fa-solid fa-play"></i> Listen to Songs';
      heroPrimaryBtn.setAttribute('href', '#music');

      if (profileImg) {
        profileImg.src = 'assets/images/vocal_pose.jpg';
      }
    }
  }

  // 3. Category Filter for Music & Projects
  const filterTabs = document.querySelectorAll('.filter-tab');
  const mediaItems = document.querySelectorAll('[data-category]');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      mediaItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. Contact Form Handler (Simulated smooth response)
  const contactForm = document.getElementById('contact-form');
  const formSuccessAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        contactForm.reset();
        if (formSuccessAlert) {
          formSuccessAlert.style.display = 'block';
        }
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // 5. Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(11, 15, 25, 0.98)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
    });
  }
});
