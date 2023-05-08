/*============= toggle icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*============= scroll section avtive link =======*/
let section= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header naav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            };
        });

        /*=============== sticky navbar ============*/
        let header = document.querySelector('header');

        header.classList.toggle('sticky', windows.scrollY > 100);
    
};

/*================== scroll reveal ============*/
ScrollReveal({
    reset: true,
    distance: '800px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal ('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.prince-img, .services-container, .porfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sima-img', { origin: 'left' });