const menubtn = document.querySelector(".menu-button")
const navlinks = document.querySelector(".nav-links")

menubtn.addEventListener('click', function(e){

navlinks.classList.toggle('mobile-menu')

})