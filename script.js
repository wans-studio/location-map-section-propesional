// Scroll animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready!');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = [
        document.querySelector('.section-header'),
        document.querySelector('.map-wrapper'),
        document.querySelector('.info-cards')
    ];

    elementsToAnimate.forEach(element => {
        if (element) {
            observer.observe(element);
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigate button enhanced interaction
    const navigateBtn = document.getElementById('navigateBtn');
    if (navigateBtn) {
        navigateBtn.addEventListener('click', function() {
            console.log('Navigation button clicked');
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Card hover effects enhancement
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation for map iframe
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.style.opacity = '0';
        mapContainer.style.transition = 'opacity 0.8s ease-in';
        
        // Fade in map after load
        mapContainer.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        // Fallback timeout
        setTimeout(() => {
            mapContainer.style.opacity = '1';
        }, 1000);
    }

    // Map wrapper hover effect
    const mapWrapper = document.querySelector('.map-wrapper');
    if (mapWrapper) {
        mapWrapper.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.overlay-badge');
            if (badge) {
                badge.style.transform = 'scale(1.05)';
            }
        });

        mapWrapper.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.overlay-badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
    }

    // Add pulse animation to badge
    const badge = document.querySelector('.overlay-badge');
    if (badge) {
        setInterval(() => {
            badge.style.animation = 'none';
            setTimeout(() => {
                badge.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        }, 5000);
    }

    // Enhanced button interaction
    const buttons = document.querySelectorAll('.navigate-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px) scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
    });

    // Add ripple effect to cards
    infoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = e.clientX - this.offsetLeft + 'px';
            ripple.style.top = e.clientY - this.offsetTop + 'px';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Handle window resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        console.log('Window resized');
    }, 250);
});