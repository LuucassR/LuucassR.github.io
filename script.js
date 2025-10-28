document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Smooth Navigation & Active Link Highlighting ---
  
  // Select all sections with an id and all navigation links
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // IntersectionObserver options
  const observerOptions = {
    root: document.getElementById('main-content'), // Observe scrolling inside main-content
    rootMargin: '0px',
    threshold: 0.6 // Section must be 60% visible to trigger
  };

  // Create observer to highlight active navigation link
  const navObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove 'active' from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add 'active' to the current section's link
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach(section => {
    navObserver.observe(section);
  });
  
  // Smooth scroll handled by CSS (scroll-behavior: smooth)
  // JS fallback is optional for more complex scenarios


  // --- 2. Scroll Reveal Animation (Fade-in/Slide) ---
  
  const revealSections = document.querySelectorAll('section:not(#inicio)'); // Skip the "inicio" section
  
  const revealObserverOptions = {
    root: document.getElementById('main-content'),
    threshold: 0.15 // Start animation when 15% visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible'); // Show section
        observer.unobserve(entry.target); // Stop observing after animation
      }
      // Optionally hide section again if it leaves viewport
      // entry.target.classList.remove('section-visible');
    });
  }, revealObserverOptions);

  // Hide sections initially and start observing
  revealSections.forEach(section => {
    section.classList.add('section-hidden'); 
    revealObserver.observe(section);
  });


  // --- 3. Particle Animation (Hover Interaction) ---
  
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  let w, h;
  
  // Object to track mouse position
  const mouse = {
    x: null,
    y: null,
    radius: 200 // Influence radius
  };

  const mainContent = document.getElementById('main-content');

  // Track mouse movement over main-content
  mainContent.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  // Reset mouse when it leaves
  mainContent.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Resize canvas to fit container
  function resizeCanvas() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles(); // Reinitialize particles on resize
  });
  resizeCanvas();

  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() * 2 + 1; // Optimized size
      this.baseX = this.x; // Original position
      this.baseY = this.y;
      this.density = Math.random() * 60 + 1; // How fast it reacts
      
      // Slow, subtle movement
      this.speedX = Math.random() * 0.4 - 0.2; 
      this.speedY = Math.random() * 0.4 - 0.2;
    }

    draw() {
      ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'; // Primary color
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 10);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      // Basic movement
      this.x += this.speedX;
      this.y += this.speedY;

      // Reset if out of bounds
      if (this.x > w + 5 || this.x < -5) this.x = Math.random() * w;
      if (this.y > h + 5 || this.y < -5) this.y = Math.random() * h;
      
      // Hover interaction
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        // Push particle away
        this.x -= directionX * 0.1;
        this.y -= directionY * 0.1;
      } else {
        // Return to original position
        if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 20;
        if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 20;
      }
    }
  }

  // Initialize particles
  function initParticles() {
    particlesArray = [];
    let numberOfParticles = (w * h) / 5000; // Optimized number
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();

  // Animate particles
  function animateParticles() {
    ctx.clearRect(0, 0, w, h);
    for (let particle of particlesArray) {
      particle.update();
      particle.draw();
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();


  // --- 4. Typing Text Effect ---
  
  const typedTextSpan = document.querySelector('.typed-text');
  const words = ["Junior Full-Stack Developer", "Python Backend Specialist", "Web Development Enthusiast"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newWordDelay = 2000;
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      if(!typedTextSpan.classList.contains('typing')) typedTextSpan.classList.add('typing');
      typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      typedTextSpan.classList.remove('typing');
      setTimeout(erase, newWordDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if(!typedTextSpan.classList.contains('typing')) typedTextSpan.classList.add('typing');
      typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      typedTextSpan.classList.remove('typing');
      wordIndex++;
      if(wordIndex >= words.length) wordIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  // Start typing effect after a short delay
  setTimeout(type, 1000); 

}); // End of DOMContentLoaded
