const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 400,


})




sr.reveal('.home_content')
sr.reveal('.services_container', {
    delay: 1200,
    origin: 'bottom',
    interval: 100
})




sr.reveal('.resume_section:nth-child(1)', {
    delay: 200,
    distance: '60px',
    duration: 2400,
    origin: 'left',

})

sr.reveal('.resume_section:nth-child(2)', {
    delay: 200,
    distance: '60px',
    duration: 2400,
    origin: 'right',

})


sr.reveal('.skill_img_container', {
    delay: 200,
    distance: '60px',
    duration: 2200,
    origin: 'bottom',

})