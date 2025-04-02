/*Utilizando ScrollReveal*/

window.sr = ScrollReveal({reset: true});

sr.reveal('.box-video iframe', {duration: 2000});
sr.reveal('.foto1', {duration: 300});
sr.reveal('.foto2', {duration: 300});
sr.reveal('.foto3', {duration: 300});
sr.reveal('.curiosidades', {
    rotate: {x:100, y:100, z:0},
    duration: 1200
});

