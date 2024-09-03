console.log('app.js loaded');
document.addEventListener('DOMContentLoaded', function() {
    

    // Burger menu
    let burger = document.querySelector('#burger-button');
    let menu = document.querySelector('.main-menu');
    let body = document.querySelector('body');
    burger.addEventListener('click', function() {
        menu.classList.toggle('show');
        burger.classList.toggle('open');
        body.classList.toggle('lock');
    });
    // Dropdown menu
    let menuItems = document.querySelectorAll('li.menu-item > a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            let subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains('sub-menu')) {
                subMenu.classList.toggle('open');
            }
        });
    });
    // Slider
        let width = window.innerWidth;
        let swiper;
        if (width >= 768) {
            swiper = new Swiper('.swiper-container', {
                slidesPerView: 1, 
                initialSlide: 0,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                
                navigation: {
                        nextEl: ".button-next",
                        prevEl: ".button-prev"
                    },
                effect: 'slide',
            
            });
        } else  if (width < 768){
            swiper.disable();
    }
    
});   
 