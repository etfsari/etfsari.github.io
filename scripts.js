document.addEventListener('DOMContentLoaded', () => {
    const currentFlag = document.querySelector('.current-flag');
    const otherFlags = document.querySelector('.other-flags');
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('header nav ul');

    // Toggle other flags menu on current flag click
    currentFlag.addEventListener('click', () => {
        otherFlags.style.display = otherFlags.style.display === 'none' ? 'block' : 'none';
    });

    // Toggle navigation menu on burger menu click
    burgerMenu.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'none' ? 'flex' : 'none';
    });

    const flags = {
        englishFlag: 'index.html',
        frenchFlag: 'index_fr.html',
        spanishFlag: 'index_es.html',
        dutchFlag: 'index_nl.html',
        turkishFlag: 'index_tr.html',
        afghanFlag: 'index_af.html'
    };

    // Add event listeners to each flag
    Object.keys(flags).forEach(flagId => {
        const flagElement = document.getElementById(flagId);
        if (flagElement) {
            flagElement.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                const url = flags[flagId];
                if (url && url !== window.location.href) {
                    window.location.href = url;
                }
            });
        }
    });

    // Smooth scroll to services section on Learn More button click
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('services').offsetTop,
            behavior: 'smooth'
        });
    });

    // Form submission handling (optional, adjust form action URL as needed)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
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
    }
});
