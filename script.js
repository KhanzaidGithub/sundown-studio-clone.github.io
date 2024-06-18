// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


let elemcon = document.getElementById('elem-container');
let fixed = document.querySelector('#fixed-img');

elemcon.addEventListener('mouseenter', () => {
    fixed.style.display = 'block'
});

elemcon.addEventListener('mouseleave', () => {
    fixed.style.display = 'none'
});

// let elems = document.getElementById('elem1');
// elems.addEventListener('mouseenter', () => {
//     let image = elems.getAttribute('data-image');
//     fixed.style.backgroundImage = `url(${image})`
// })

let elems = document.querySelectorAll('.elem');
elems.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        let image = e.getAttribute('data-image');
        fixed.style.backgroundImage = `url(${image})`
    })
})