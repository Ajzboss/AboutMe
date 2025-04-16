document.addEventListener('DOMContentLoaded', () => {
    //add transition to all links 
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent immediate navigation
          document.querySelector('body').classList.add('transition-out');
          const href = this.getAttribute('href');
          setTimeout(() => {
            window.location.href = href; // Navigate after animation
            document.querySelector('body').classList.remove('transition-out'); // Remove class after navigation
            document.querySelector('body').classList.add('transition-in');
            setTimeout(() => {
                document.querySelector('body').classList.remove('transition-in'); // Remove class after navigation
                }, 500); // Match this to your CSS transition duration
          }, 500); // Match this to your CSS transition duration
        });

      });


    // Initialize the dark mode toggle button
    const button = document.querySelector('#dark-mode-toggle');
    button.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        button.textContent = document.documentElement.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Initialize the Course Expansion button
    const courseDivs = document.querySelectorAll('.card-block > div');
    courseDivs.forEach(div => {
        div.addEventListener('click', () => {
            if (div.querySelector('.card-content').classList.contains('expanded')) {
                div.querySelector('.card-content').classList.remove('expanded');
            } else {
                div.querySelector('.card-content').classList.add('expanded');
            };
        });
    });

    
});

