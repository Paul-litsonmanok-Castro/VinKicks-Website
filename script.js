function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}


const toggleButton = document.getElementsByClassName('button-menu-image')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

const arrowButton = document.getElementsByClassName('arrow-down-image')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]

arrowButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#PrevBtn');
const nextBtn = document.querySelector('#NextBtn');

//Counter
let counter = 1; 
const size = carouselImages[0].clientWidth;

//Shift to first image
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 1.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);
});

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 1.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

