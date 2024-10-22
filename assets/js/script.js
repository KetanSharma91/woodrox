//navbar
if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("Mobile");

    const nav = document.querySelector('.navbar-toggler');
        const navbar = document.querySelector('.navbarcollapse');

        nav.addEventListener('click', () => {
            nav.classList.toggle('actived');
            navbar.classList.toggle('actived');
        });
        
    window.addEventListener('scroll', function () {
        const header = this.document.querySelector('.header')
        const logo1 = document.querySelector('.header .navbar .logo img');
        const logo2 = document.querySelector('.header .navbar .logo img+img');

        if (window.scrollY > 0) {
            header.classList.add('navbar-fixed');
            logo1.style.display = 'none';
            logo2.style.display = 'block';
        } else {
            header.classList.remove('navbar-fixed');
            logo1.style.display = 'none';
            logo2.style.display = 'block';
        }
    });

} else {
    console.log("PC");
    window.addEventListener('scroll', function () {
        const header = this.document.querySelector('.header')
        const logo1 = document.querySelector('.header .navbar .logo img');
        const logo2 = document.querySelector('.header .navbar .logo img+img');

        if (window.scrollY > 0) {
            header.classList.add('navbar-fixed');
            logo1.style.display = 'none';
            logo2.style.display = 'block';
        } else {
            header.classList.remove('navbar-fixed');
            logo1.style.display = 'block';
            logo2.style.display = 'none';
        }
    });

    const clientItems = document.querySelectorAll('.client-item');
    let currentIndex = 0;

    // Function to show the next client item
    function showNextClient() {
        const currentItem = clientItems[currentIndex];
        currentItem.classList.remove('show'); // Start exit animation
        currentItem.classList.add('exit');

        // Update index to the next item
        currentIndex = (currentIndex + 1) % clientItems.length; // Loop back to the first item
        const nextItem = clientItems[currentIndex];

        // Wait for the exit animation to finish before showing the next item
        setTimeout(() => {
            currentItem.classList.remove('exit'); // Remove exit class
            nextItem.classList.add('show', 'enter'); // Show the next item with enter animation
        }, 500); // Match this timeout with the duration of the exit animation
    }

    // Initialize the first item
    clientItems[currentIndex].classList.add('show');

    // Start the slider
    setInterval(showNextClient, 600); // Change every 2 seconds

}


//city,country code
const niceSelects = document.querySelectorAll('.nice-select');

niceSelects.forEach(niceSelect => {
    const current = niceSelect.querySelector('.current');
    const options = niceSelect.querySelectorAll('.option');

    // Toggle the list on clicking 'current'
    current.addEventListener('click', () => {
        niceSelect.classList.toggle('open');
    });

    // Update selected option and current text
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'selected' class from any previously selected option in this dropdown
            options.forEach(opt => opt.classList.remove('selected', 'focus'));

            // Add 'selected' and 'focus' class to the clicked option
            option.classList.add('selected', 'focus');

            // Update the 'current' text with the selected option's text
            current.textContent = option.textContent;

            // Close the dropdown after selection
            niceSelect.classList.remove('open');
        });
    });
});