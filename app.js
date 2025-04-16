document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#dark-mode-toggle');
    button.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        button.textContent = document.documentElement.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});