document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to services section
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('services').offsetTop,
            behavior: 'smooth'
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('https://formspree.io/f/mayrrvwj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Thank you for contacting us! Your message has been sent.');
                    contactForm.reset();
                } else {
                    alert('Failed to send your message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An unexpected error occurred. Please try again later.');
            });
    });

    // Mobile menu (hamburger menu) toggle functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('header nav ul');

    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('menu-opened'); // Toggle menu visibility
    });

    // Language flags redirection
    const flags = {
        englishFlag: 'index.html',
        frenchFlag: 'index_fr.html',
        spanishFlag: 'index_es.html',
        dutchFlag: 'index_nl.html',
        turkishFlag: 'index_tr.html',
        afghanFlag: 'index_af.html'
    };

    Object.keys(flags).forEach(flagId => {
        const flagElement = document.getElementById(flagId);
        if (flagElement) {
            flagElement.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.href = flags[flagId];
            });
        }
    });
});
