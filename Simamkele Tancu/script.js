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