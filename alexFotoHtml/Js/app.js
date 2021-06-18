//Carousel

const carouselSlide = document.querySelector('.carousel_images');
const carouselImages = document.querySelectorAll('.carousel_images img');

//Buttons
const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

carouselSlide.addEventListener('transitionend', () => {

    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    
})

// lightbox, fungerar icke (och hinner inte fixa tills exemination men vill gärna försöka efter,
// därav finns denna kod kvar :))

// const lightbox = document.getElementsByClassName('.lightbox');

// const images = document.querySelectorAll('.gallery_img')
// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('active')
//         const img = document.createElement('gallery_img')
//         gallery_img.src = gallery_img.src
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)}
//         lightbox.appendChild(gallery_img)
//     })
// })

// lightbox.classList.remove('click', e => {
//     if(e.target !== e.currentTarget)return
//     lightbox.classList.remove('active')
// })