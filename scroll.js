document.addEventListener('scroll', function() {
    const scrollImage = document.querySelector('.scroll-image');
    if (window.scrollY > window.innerHeight / 2) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
