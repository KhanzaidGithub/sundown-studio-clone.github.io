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


function swiperanimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}
function menu() {
    let full = document.getElementById('fullscr');
    let btn = document.querySelector('nav h3');
    let flag = 0;
    btn.addEventListener('click', function () {
        if (flag == 0) {
            full.style.top = 0;
            flag = 1
        }
        else {
            full.style.top = '100%';
            flag = 1
        }
    })
}
function loader() {
    let loader = document.querySelector('#loader');
    setTimeout(() => {
        loader.style.top = '-100%'
    }, 3500);

}
swiperanimation();
menu();
loader();



