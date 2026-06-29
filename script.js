// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all dynamic content from data.js
  renderPortfolio();

  // 2. Initialize Lucide Icons for dynamically rendered elements
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 3. Initialize UI behaviors
  initNavbar();
  initScrollAnimations();
  initProjectFiltering();
  initContactForm();
  initCanvasBackground();
});

/* ==========================================================================
   Dynamic Rendering System
   ========================================================================== */
function renderPortfolio() {
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA is not defined. Make sure data.js is loaded first.');
    return;
  }

  const { profile, education, stats, experience, projects, skills } = PORTFOLIO_DATA;

  // 1. Update logo text
  const logoEl = document.getElementById('nav-logo');
  if (logoEl) {
    logoEl.innerHTML = `${profile.name}<span class="logo-dot"></span>`;
  }

  const heroWrapper = document.getElementById('hero-content-wrapper');
  if (heroWrapper) {
    heroWrapper.innerHTML = `
      <h1>Hi, I'm <span class="highlight">${profile.name}</span></h1>
      <p class="hero-subtitle">${profile.subtitle}</p>
      <div class="hero-minimal-links">
        <a href="mailto:${profile.email}" class="minimal-link">Email</a>
        <span class="link-separator">/</span>
        <a href="${profile.github}" target="_blank" class="minimal-link">GitHub</a>
        <span class="link-separator">/</span>
        <a href="${profile.linkedin}" target="_blank" class="minimal-link">LinkedIn</a>
      </div>
    `;
  }

  // 3. Render About
  const aboutWrapper = document.getElementById('about-grid-wrapper');
  if (aboutWrapper) {
    const courseworkList = education.coursework.map(course => `<li class="tech-badge">${course}</li>`).join('');
    
    let statsHtml = '';
    if (stats && stats.length > 0) {
      const statsListHtml = stats.map(stat => `
        <div class="glass-card stat-item">
          <span class="stat-number">${stat.number}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join('');
      statsHtml = `<div class="about-stats" style="margin-top: 2rem;">${statsListHtml}</div>`;
    }

    aboutWrapper.innerHTML = `
      <div class="glass-card about-info">
        <h3>Education</h3>
        <p><strong>${education.school}</strong></p>
        <p>${education.degree}, ${education.minor}</p>
        <p style="color: var(--color-secondary); font-weight: 600;">${education.graduation}</p>
        <div style="margin-top: 1.5rem;">
          <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.5rem;">Relevant Coursework:</h4>
          <ul style="list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${courseworkList}
          </ul>
        </div>
      </div>
      
      <div class="about-text">
        <p>${profile.bio}</p>
        ${statsHtml}
      </div>
    `;
  }

  // 4. Render Experience Timeline
  const experienceWrapper = document.getElementById('experience-timeline-wrapper');
  if (experienceWrapper) {
    experienceWrapper.innerHTML = experience.map((exp, idx) => {
      const bulletList = exp.bullets.map(b => `<li>${b}</li>`).join('');
      return `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">${exp.period}</div>
          <div class="glass-card timeline-content">
            <h3>${exp.role}</h3>
            <div class="timeline-company">${exp.company}</div>
            <ul class="timeline-details">
              ${bulletList}
            </ul>
          </div>
        </div>
      `;
    }).join('');
  }

  // 5. Render Projects
  const projectsWrapper = document.getElementById('projects-grid-wrapper');
  if (projectsWrapper) {
    projectsWrapper.innerHTML = projects.map(project => {
      const techBadges = project.technologies.map(t => `<li class="tech-badge">${t}</li>`).join('');
      const awardHtml = project.award ? `<div style="color: var(--color-secondary); font-size: 0.85rem; font-weight: 600; margin-bottom: 0.75rem; text-transform: uppercase;">${project.award}</div>` : '';
      
      return `
        <div class="glass-card">
          <div class="project-card" data-categories="${project.categories}">
            <div class="project-header">
              <h3>${project.title}</h3>
              <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link" aria-label="GitHub Repository">
                  <i data-lucide="github"></i>
                </a>
              </div>
            </div>
            ${awardHtml}
            <p class="project-desc">${project.description}</p>
            <ul class="project-tech-list">
              ${techBadges}
            </ul>
          </div>
        </div>
      `;
    }).join('');
  }

  // 6. Render Skills
  const skillsWrapper = document.getElementById('skills-grid-wrapper');
  if (skillsWrapper) {
    const langList = skills.languages.map(l => `<li>${l}</li>`).join('');
    const techList = skills.technologies.map(t => `<li>${t}</li>`).join('');
    const dbList = skills.databases.map(d => `<li>${d}</li>`).join('');

    skillsWrapper.innerHTML = `
      <!-- Languages -->
      <div class="glass-card skills-card">
        <h3><i data-lucide="code"></i> Languages</h3>
        <ul class="skills-list">${langList}</ul>
      </div>
      
      <!-- Technologies -->
      <div class="glass-card skills-card">
        <h3><i data-lucide="cpu"></i> Technologies</h3>
        <ul class="skills-list">${techList}</ul>
      </div>
      
      <!-- Databases -->
      <div class="glass-card skills-card">
        <h3><i data-lucide="database"></i> Databases</h3>
        <ul class="skills-list">${dbList}</ul>
      </div>
    `;
  }

  // 7. Render Contact Details
  const contactDetailsWrapper = document.getElementById('contact-details-wrapper');
  if (contactDetailsWrapper) {
    contactDetailsWrapper.innerHTML = `
      <h3>Let's Connect</h3>
      <p style="color: var(--text-muted); font-weight: 300;">
        I am actively seeking internship opportunities where I can apply my skills in AI engineering and fullstack development. Feel free to reach out via email or connect with me on socials.
      </p>
      
      <div class="contact-info-list">
        <a href="mailto:${profile.email}" class="contact-item">
          <div class="contact-icon"><i data-lucide="mail"></i></div>
          <div>
            <strong style="color: var(--text-main);">${profile.email}</strong>
          </div>
        </a>
        
        <a href="${profile.linkedin}" target="_blank" class="contact-item">
          <div class="contact-icon"><i data-lucide="linkedin"></i></div>
          <div>
            <strong style="color: var(--text-main);">linkedin.com/in/${profile.linkedin.split('/').pop()}</strong>
          </div>
        </a>

        <a href="${profile.github}" target="_blank" class="contact-item">
          <div class="contact-icon"><i data-lucide="github"></i></div>
          <div>
            <strong style="color: var(--text-main);">github.com/${profile.github.split('/').pop()}</strong>
          </div>
        </a>
      </div>
    `;
  }

  // 8. Render Footer
  const footerEl = document.getElementById('footer-section');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="container footer-container">
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} ${profile.name}. Built with passion & AI.
        </div>
        <div class="footer-socials">
          <a href="${profile.github}" target="_blank" class="social-link" aria-label="GitHub"><i data-lucide="github"></i></a>
          <a href="${profile.linkedin}" target="_blank" class="social-link" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
          <a href="mailto:${profile.email}" class="social-link" aria-label="Email"><i data-lucide="mail"></i></a>
        </div>
      </div>
    `;
  }
}

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

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('open');
      
      if (navMenu.classList.contains('active')) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(40, 44, 52, 0.98)';
        navMenu.style.backdropFilter = 'blur(10px)';
        navMenu.style.padding = '2rem';
        navMenu.style.borderBottom = '1px solid var(--border-light)';
        navMenu.style.gap = '1.5rem';
        navMenu.style.alignItems = 'center';
      } else {
        navMenu.removeAttribute('style');
      }
    });

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
  const animatedElements = document.querySelectorAll('.glass-card, .timeline-item, .hero-content, .section-header');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
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
          parentCard.style.transform = 'scale(0.95)';
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

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="badge-pulse" style="margin-right: 0.5rem; display: inline-block;"></span> Sending...`;

    setTimeout(() => {
      submitBtn.innerHTML = `✓ Message Sent!`;
      submitBtn.style.backgroundColor = 'var(--color-secondary)';
      submitBtn.style.color = 'var(--bg-dark)';
      
      form.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
      }, 3000);
      
      showToast("Thank you! Your message was sent successfully.");
    }, 1500);
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '2rem';
  toast.style.right = '2rem';
  toast.style.background = 'rgba(40, 44, 52, 0.95)';
  toast.style.border = '1px solid var(--color-primary)';
  toast.style.color = 'var(--text-main)';
  toast.style.padding = '0.75rem 1.25rem';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
  toast.style.zIndex = '1000';
  toast.style.fontFamily = 'var(--font-primary)';
  toast.style.fontSize = '0.9rem';
  toast.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(15px)';

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 100);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 400);
  }, 3500);
}

/* ==========================================================================
   Canvas Antigravity Interactive Particle Physics Background
   ========================================================================== */
function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas') || document.createElement('canvas');
  if (!canvas.parentNode) {
    canvas.id = 'bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Particle configuration - expanded density for rich field
  let particles = [];
  const particleCount = 135; // Increased from 55 to 135
  const connectionDistance = 115;
  
  // Mouse position tracker
  const mouse = {
    x: null,
    y: null,
    vx: 0,
    vy: 0,
    lastX: null,
    lastY: null,
    radius: 200 // Expanded area of influence
  };

  // Adjust canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Capture mouse coordinates and calculate velocity
  window.addEventListener('mousemove', (e) => {
    if (mouse.lastX !== null && mouse.lastY !== null) {
      mouse.vx = e.clientX - mouse.lastX;
      mouse.vy = e.clientY - mouse.lastY;
    }
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.lastX = e.clientX;
    mouse.lastY = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
    mouse.vx = 0;
    mouse.vy = 0;
    mouse.lastX = null;
    mouse.lastY = null;
  });

  // Particle Class Definition
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      // Soft drift base speeds
      this.baseVx = (Math.random() - 0.5) * 0.2;
      this.baseVy = -Math.random() * 0.15 - 0.05; // Gentle float upwards (Antigravity)
      this.vx = this.baseVx;
      this.vy = this.baseVy;
      this.size = Math.random() * 2 + 1; // 1px to 3px
      // White particles with clear but elegant opacity
      this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.25})`; // Opacity 0.25 - 0.55
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      // Re-route if hitting horizontal bounds
      if (this.x < 0 || this.x > canvas.width) {
        this.vx = -this.vx;
        this.baseVx = -this.baseVx;
      }
      // Reset to bottom if floating past the top
      if (this.y < -10) {
        this.y = canvas.height + 10;
        this.x = Math.random() * canvas.width;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
      }

      // Mouse interactive physics (Antigravity repulsion & drag)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        
        if (distance < mouse.radius) {
          const ndx = dx / distance;
          const ndy = dy / distance;
          
          // Physical "sweeper" boundary: strong push when very close (acts like a physical broom)
          const minDistance = 75;
          if (distance < minDistance) {
            const pushDist = minDistance - distance;
            this.x += ndx * pushDist;
            this.y += ndy * pushDist;
            // Add a strong sudden velocity impulse
            this.vx += ndx * 5;
            this.vy += ndy * 5;
          } else {
            // General exponential repulsion field (very noticeble at mid-range)
            const force = (mouse.radius - distance) / mouse.radius;
            this.vx += ndx * force * 4.5;
            this.vy += ndy * force * 4.5;
          }

          // Swirl drag factor: pulls particles along with cursor movement path
          const dragFactor = (mouse.radius - distance) / mouse.radius;
          this.vx += mouse.vx * dragFactor * 0.25;
          this.vy += mouse.vy * dragFactor * 0.25;
        }
      }

      // Physics integration: position + velocity
      this.x += this.vx;
      this.y += this.vy;

      // Friction: decelerate back to the base slow drift speed smoothly
      this.vx = this.vx * 0.94 + this.baseVx * 0.06;
      this.vy = this.vy * 0.94 + this.baseVy * 0.06;
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
    
    // Smoothly decay mouse speed
    mouse.vx *= 0.9;
    mouse.vy *= 0.9;

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw minimalist lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          // Connection lines are also brighter white
          const alpha = (1 - dist / connectionDistance) * 0.14;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}
