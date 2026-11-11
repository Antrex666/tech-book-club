document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggleBtn.querySelector('.toggle-icon');

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleIcon.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // --- 2. Typing Animation for Hero Title ---
    const typingTextElement = document.querySelector('.typing-text');
    const phrases = ["Read. Learn. Build.", "Level Up Your Skills.", "Join the Club."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Delete faster
        } else {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Type slower
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            isDeleting = true;
            typingSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start the typing animation
    setTimeout(type, 1000);
});