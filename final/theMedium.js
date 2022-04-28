const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active'); //slide in side nav 

        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkAnimation 0.5s ease forwards';
            }
        });
        
        //change to X 
        burger.classList.toggle("X");
    });

}

// const app = ()=> {
//     navSlide
// }

navSlide();



// inpsiration from https://www.youtube.com/watch?v=gXkqy0b4M5g
