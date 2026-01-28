// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// CTA Button scroll to contact
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// About info button functionality
const infoData = {
    journey: '<p>I started my coding journey 5 years ago with a passion for building beautiful and functional web applications. From learning HTML and CSS to mastering React and Node.js, every step has been an exciting adventure. I\'ve worked on diverse projects ranging from startups to enterprise applications.</p>',
    interests: '<p><strong>What fascinates me:</strong></p><p>• Building scalable web applications</p><p>• Open source contributions</p><p>• Teaching and mentoring junior developers</p><p>• Exploring new technologies like AI and machine learning</p><p>• Creating intuitive user experiences</p>',
    goals: '<p><strong>My aspirations:</strong></p><p>• Build products that impact millions of users</p><p>• Contribute significantly to open source projects</p><p>• Become a thought leader in full-stack development</p><p>• Create educational content for the developer community</p><p>• Lead a talented engineering team</p>'
};

document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', function() {
        const infoType = this.getAttribute('data-info');
        const infoContent = document.getElementById('info-content');
        
        // Remove active class from all buttons
        document.querySelectorAll('.info-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update content with animation
        infoContent.style.opacity = '0';
        setTimeout(() => {
            infoContent.innerHTML = infoData[infoType];
            infoContent.style.opacity = '1';
        }, 150);
    });
});

// Skill expand button functionality
document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const skillCard = this.closest('.skill-card');
        const skillDetails = skillCard.querySelector('.skill-details');
        const isVisible = skillDetails.style.display !== 'none';
        
        // Toggle visibility
        skillDetails.style.display = isVisible ? 'none' : 'block';
        
        // Update button text
        this.textContent = isVisible ? 'Learn More ▼' : 'Show Less ▲';
        
        // Update button color
        this.style.background = isVisible ? 'var(--primary-color)' : 'var(--secondary-color)';
    });
});

// Project details button functionality
document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const projectCard = this.closest('.project-card');
        const projectDetails = projectCard.querySelector('.project-details');
        const isVisible = projectDetails.style.display !== 'none';
        
        // Toggle visibility
        projectDetails.style.display = isVisible ? 'none' : 'block';
        
        // Update button text
        this.textContent = isVisible ? 'View Details' : 'Hide Details';
        
        // Update button color
        this.style.background = isVisible ? 'var(--primary-color)' : 'var(--secondary-color)';
    });
});

// Add initial animation to info content
const infoContent = document.getElementById('info-content');
if (infoContent) {
    infoContent.style.transition = 'opacity 0.3s ease';
}
