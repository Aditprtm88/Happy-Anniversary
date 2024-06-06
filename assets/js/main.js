/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*Menu Show*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*Menu Hide*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50  ?   header.classList.add('blur-header')
                        :   header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)
/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY
    
    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }        
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.kenangan__card', {interval: 100})
sr.reveal('.tentangkita__content', {origin: 'right'})
sr.reveal('.tentangkita__img', {origin: 'left'})
sr.reveal('.kenangan__scroll', {delay: 800})
sr.reveal('.harapan__scroll', {delay: 800})
sr.reveal('.buatkamu__content', {origin: 'right'})
sr.reveal('.buatkamu__img', {origin: 'left'})
sr.reveal('.harapan__content', {origin: 'right'})
sr.reveal('.harapan__img', {origin: 'left'})
sr.reveal('.whatsapp__button', {origin: 'right'})