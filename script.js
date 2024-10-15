document.getElementById('cta-button').addEventListener('click', () => {
    window.location.href = '#cars';
});

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Car added to cart!');
    });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
});
