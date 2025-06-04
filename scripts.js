// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking overlay
    mobileOverlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Mobile dropdown functionality
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown > a');
    mobileDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-chevron-down');
            this.querySelector('i').classList.toggle('fa-chevron-up');
        });
    });
    
    // Sticky header effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.add('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
  // Form validation for contact page
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Please fill in required fields');
        return;
    }
    
    // Here you would typically send data to server
    alert('Form would be submitted here');
    // In a real implementation, you would use fetch() to send data
});
    
const contactForm = document.getElementById('feedbackForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        let isValid = true;
        
        if (name.value.trim() === '') {
            name.style.borderColor = 'red';
            isValid = false;
        } else {
            name.style.borderColor = '';
        }
        
        if (email.value.trim() === '' || !email.value.includes('@')) {
            email.style.borderColor = 'red';
            isValid = false;
        } else {
            email.style.borderColor = '';
        }
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields correctly.');
        } else {
            // Form is valid - show thank you message
            alert('Thank you for your feedback! We appreciate it.');
            // Optional: You could also add code here to actually submit the form
            // via AJAX or let the normal form submission proceed
        }
    });
}
    
    // Vehicle filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.dataset.category || this.dataset.price;
                const vehicleCards = document.querySelectorAll('.vehicle-card');
                
                vehicleCards.forEach(card => {
                    if (category === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardCategory = card.dataset.category || card.dataset.price;
                        if (cardCategory === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
});
