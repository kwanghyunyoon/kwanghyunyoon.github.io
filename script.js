// ==========================================
// NAVIGATION & SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to section
        const section = this.getAttribute('data-section');
        const element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// SCROLL TO SECTION HELPER
// ==========================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// PROJECT FILTERING
// ==========================================

function filterProjects(category) {
    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter projects
    document.querySelectorAll('.project-card').forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 0);
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 0);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        }
    });
}

// ==========================================
// PROJECT MODAL (OPTIONAL ENHANCEMENT)
// ==========================================

function openProjectModal(projectId) {
    alert('Full project details for: ' + projectId + '\n\nYou can expand this with a modal later.');
    // This is a placeholder - you can add a modal popup here
}

// ==========================================
// CONTACT FORM HANDLING (for Formspree)
// ==========================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    // simple front-end validation only
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      e.preventDefault();
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.className = 'form-note error';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.className = 'form-note error';
      return;
    }

    // Let the browser submit to Formspree.
    formStatus.textContent = 'Message sent!';
    formStatus.className = 'form-note success';
  });
}


// ==========================================
// PAGE LOAD EFFECTS
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.5s ease';
        }, index * 100);
    });
    
    console.log('Portfolio site loaded successfully!');
});
