document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Navbar Styling on Scroll
  const navbar = document.querySelector('.custom-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // 2. Pause Marquee Ticker on Hover
  const tickerWrapper = document.getElementById('tickerWrapper');
  const tickerContent = document.getElementById('tickerContent');
  
  if (tickerWrapper && tickerContent) {
    tickerWrapper.addEventListener('mouseenter', () => {
      tickerContent.style.animationPlayState = 'paused';
    });
    tickerWrapper.addEventListener('mouseleave', () => {
      tickerContent.style.animationPlayState = 'running';
    });
  }

  // 3. Back-to-Top Button Toggle & Smooth Scroll (Fixed Guard)
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('d-none');
      } else {
        backToTopBtn.classList.add('d-none');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Auto-Close Mobile Navbar Menu on Link Click
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  // 5. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');

  if (contactForm && formAlert) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName')?.value.trim();
      const email = document.getElementById('custEmail')?.value.trim();
      const message = document.getElementById('custMessage')?.value.trim();

      if (!name || !email || !message) {
        formAlert.className = 'mt-2 text-center text-danger fw-bold';
        formAlert.textContent = 'Please complete all required fields.';
        formAlert.classList.remove('d-none');
        return;
      }

      formAlert.className = 'mt-2 text-center text-warning fw-bold';
      formAlert.textContent = 'Sending your message...';
      formAlert.classList.remove('d-none');

      setTimeout(() => {
        formAlert.className = 'mt-2 text-center text-success fw-bold';
        formAlert.textContent = `Thank you, ${name}! We have received your message.`;
        contactForm.reset();
      }, 1000);
    });
  }

});