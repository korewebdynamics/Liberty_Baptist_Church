document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function() {
        // Toggles the 'active' class on the menu
        navbarCollapse.classList.toggle('active');
    });
});