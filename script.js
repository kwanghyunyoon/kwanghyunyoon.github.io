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
// CONTACT FORM HANDLING
// ==========================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !subject || !message) {
        formStatus.textContent = 'Please fill in all fields.';
        formStatus.className = 'form-note error';
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.className = 'form-note error';
        return;
    }
    
    // Since we can't send emails directly from static site,
    // we'll show a success message and suggest alternatives
    formStatus.textContent = '✓ Message prepared! Please copy the below and email to: your.email@example.com';
    formStatus.className = 'form-note success';
    
    // Create email body
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();
    
    // Log to console (for development)
    console.log('Form Data:', { name, email, subject, message });
    
    // Reset form
    contactForm.reset();
    
    // Clear message after 3 seconds
    setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = '';
    }, 5000);
});

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
