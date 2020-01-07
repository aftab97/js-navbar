const navSlide = () => {
    const apple = document.querySelector('.apple');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    apple.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            //add each <li> the style animation 
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            
            //WILL ADD THIS ANIMATION
            /*@keyframes navLinkFade{
                from{
                    opacity: 0;
                    transform:translateX(50px);
                }
                to{
                    opacity: 1;
                    transform:translateX(0px);
                }
            }*/
        });
    });


    
}

navSlide();