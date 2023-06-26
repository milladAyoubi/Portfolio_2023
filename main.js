const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 100,


})

sr.reveal('.home_content')
sr.reveal('.services_container', {
    delay: 1200,
    origin: 'bottom',
    interval: 100
})


sr.reveal('.resume_section:nth-child(1)', {
    delay: 100,
    distance: '60px',
    duration: 1200,
    origin: 'top',

})

sr.reveal('.resume_section:nth-child(2)', {
    delay: 100,
    distance: '60px',
    duration: 1200,
    origin: 'top',

})


sr.reveal('.skill_img_container', {
    delay: 100,
    distance: '60px',
    duration: 1200,
    origin: 'bottom',

})

sr.reveal('.project_container:nth-child(1)', {
    delay: 300,
    distance: '60px',
    duration: 2000,
    origin: 'bottom',

})

sr.reveal('.project_container:nth-child(2)', {
    delay: 400,
    distance: '60px',
    duration: 1000,
    origin: 'bottom',

})

sr.reveal('.project_container:nth-child(3)', {
    delay: 500,
    distance: '60px',
    duration: 1000,
    origin: 'bottom',

})

sr.reveal('.project_container:nth-child(4)', {
    delay: 600,
    distance: '60px',
    duration: 1000,
    origin: 'bottom',

})

sr.reveal('.project_container:nth-child(5)', {
    delay: 700,
    distance: '60px',
    duration: 1000,
    origin: 'bottom',

})

sr.reveal('.contact_content:nth-child(1)', {
    delay: 100,
    distance: '60px',
    duration: 750,
    origin: 'left',
})

sr.reveal('.contact_content:nth-child(2)', {
    delay: 400,
    distance: '60px',
    duration: 750,
    origin: 'left',
})


const menu = (toggle, ID) => {
    const togg = document.getElementById(toggle)
    const nav = document.getElementById(ID)


    if (togg && nav) {
        togg.addEventListener('click', () => {
            nav.classList.toggle('show')
            console.log('Complete')
        })
    }

}

menu('navMenuBar', 'nav_menu')


const navLink = document.querySelectorAll('.nav_link')


navLink.forEach(e => e.addEventListener('click', () => {

    navLink.forEach(e => e.classList.remove("selected"))
    e.classList.add("selected")


    const navMenu = document.querySelector('.nav_menu')
    navMenu.classList.remove("show")

}))