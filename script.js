// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initProjectFiltering();
  initContactForm();
  initCanvasBackground();
});

/* ==========================================================================
   Navigation Behavior
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Change navbar appearance on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Highlight active section link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle (Simplified)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('open');
      
      // Basic styling override for mobile menu toggled state
      if (navMenu.classList.contains('active')) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'hsla(230, 25%, 6%, 0.95)';
        navMenu.style.backdropFilter = 'blur(10px)';
        navMenu.style.padding = '2rem';
        navMenu.style.borderBottom = '1px solid var(--border-light)';
        navMenu.style.gap = '1.5rem';
        navMenu.style.alignItems = 'center';
      } else {
        navMenu.removeAttribute('style');
      }
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navMenu.removeAttribute('style');
        mobileMenuBtn.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   Scroll-Triggered Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.glass-card, .timeline-item, .hero-content, .hero-visual, .section-header');
  
  // Set initial hidden state styles dynamically
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   Project Category Filtering
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const parentCard = card.closest('.glass-card');
        if (!parentCard) return;

        const categories = card.getAttribute('data-categories').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          parentCard.style.display = 'block';
          setTimeout(() => {
            parentCard.style.opacity = '1';
            parentCard.style.transform = 'scale(1)';
          }, 50);
        } else {
          parentCard.style.opacity = '0';
          parentCard.style.transform = 'scale(0.9)';
          setTimeout(() => {
            parentCard.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   Interactive Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Premium button loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="badge-pulse" style="margin-right: 0.5rem; display: inline-block;"></span> Sending...`;

    // Simulate network latency (1.5s) and trigger a gorgeous success notice
    setTimeout(() => {
      submitBtn.innerHTML = `✓ Message Sent!`;
      submitBtn.style.background = 'linear-gradient(135deg, hsl(180, 80%, 40%) 0%, hsl(180, 80%, 30%) 100%)';
      
      // Reset form
      form.reset();

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 3000);
      
      // Native modern Alert banner simulation
      showToast("Thank you! Your message was sent successfully. I'll get back to you shortly.");
    }, 1500);
  });
}

// Simple Toast Notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '2rem';
  toast.style.right = '2rem';
  toast.style.background = 'var(--bg-card-hover)';
  toast.style.border = '1px solid var(--color-secondary)';
  toast.style.color = 'var(--text-main)';
  toast.style.padding = '1rem 1.5rem';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 10px 30px rgba(0, 242, 254, 0.2)';
  toast.style.zIndex = '1000';
  toast.style.fontFamily = 'var(--font-primary)';
  toast.style.fontSize = '0.95rem';
  toast.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(20px)';

  document.body.appendChild(toast);

  // Trigger animation frame
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 100);

  // Hide after 4 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 4000);
}

/* ==========================================================================
   Canvas Interactive Particle Background
   ========================================================================== */
function initCanvasBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-5';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Particle configuration
  let particles = [];
  const particleCount = 45;
  const connectionDistance = 120;
  
  // Mouse position tracker
  const mouse = {
    x: null,
    y: null,
    radius: 150
  };

  // Adjust canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Capture mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class Definition
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? 'rgba(168, 85, 247, 0.25)' : 'rgba(0, 242, 254, 0.2)';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      // Re-route if hitting edges
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      this.x += this.vx;
      this.y += this.vy;

      // Mouse interactive push
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;
        }
      }
    }
  }

  // Initialize Particles Array
  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // Loop & Draw Connections
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          // Fade line color based on proximity
          const alpha = (1 - dist / connectionDistance) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}
