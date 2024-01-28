document.addEventListener("DOMContentLoaded", () => {
    //navbar fixed
    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;

        if(window.pageYOffset > fixedNav){
            header.classList.add('navbar-fixed');
        }
        else{
            header.classList.remove('navbar-fixed')
        }
    };
    
    //btnNav
    const navButton= document.querySelector('#btnNav');
    const navMenu =document.querySelector('#nav-menu');
    if (navButton) {
        
        navButton.addEventListener('click', function () {
            navButton.classList.toggle('btnNav-active');
            navMenu.classList.toggle('hidden')
        });
    }
    else {
        console.log("navButton tidak terdeteksi ")
    }



});