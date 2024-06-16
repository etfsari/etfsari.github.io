document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('services').offsetTop,
            behavior: 'smooth'
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(contactForm);

        // Send form data using fetch API
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Thank you for contacting us! Your message has been sent.');
                    contactForm.reset(); // Optionally clear form fields
                } else {
                    alert('Failed to send your message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An unexpected error occurred. Please try again later.');
            });
    });

    const flags = {
        frenchFlag: 'index_fr.html',
        spanishFlag: 'index_es.html',
        dutchFlag: 'index_nl.html',
        turkishFlag: 'index_tr.html',
        // Ensure the default English link is handled correctly
        englishFlag: 'index.html'
    };

    // Add event listeners to each flag
    Object.keys(flags).forEach(flagId => {
        const flagElement = document.getElementById(flagId);
        if (flagElement) {
            flagElement.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = flags[flagId];
            });
        }
    });
});
