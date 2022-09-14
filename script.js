const navbar = document.querySelector('.navbar-collapse.collapse')
const navLinks = document.querySelectorAll('a.nav-link');

navLinks.forEach(navLink=>navLink.addEventListener('click', ()=>{
 navbar.classList.remove('show')
}))

document.body.addEventListener('click', ()=>{
 navbar.classList.remove('show')
})