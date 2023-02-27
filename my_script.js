const slider = document.querySelector('.slider');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const slides = document.querySelectorAll('.slide');

const slideIcons = document.querySelectorAll('.slide-icon');

const numberOfSlide = slides.length;

var slideNumber = 0;

function removeActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    });
}

function addActive() {
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
}

////////////////////////////////////////////////////////////////////////////////////////////
// image slider next button
nextBtn.addEventListener('click', () => {
    removeActive();

    slideNumber++;
    
    if( slideNumber > (numberOfSlide - 1) ) {
        slideNumber = 0;
    }

    addActive();
});

////////////////////////////////////////////////////////////////////////////////////////////
// image slider prev button
prevBtn.addEventListener('click', () => {
    removeActive();

    slideNumber--;
    
    if( slideNumber < 0) {
        slideNumber = (numberOfSlide - 1);
    }

    addActive();
});

////////////////////////////////////////////////////////////////////////////////////////////
// image slider autoplay
var playSlider;

var repeater = () => {

    playSlider = setInterval(function() {
        removeActive();
    
        slideNumber++;
        
        if( slideNumber > (numberOfSlide - 1) ) {
            slideNumber = 0;
        }
    
        addActive();
    }, 3000);
}

repeater();
////////////////////////////////////////////////////////////////////////////////////////////
// Stop the image slider autoplay on mouseover
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
})

// start the image slider autoplay again on mouseout
slider.addEventListener('mouseout', () => {
    repeater();
})

////////////////////////////////////////////////////////////////////////////////////////////
// code tự thêm vô
slideIcons.forEach((slideIcon, index) => {
    
    slideIcon.addEventListener('click', () => {
        removeActive();

        slideNumber = index;

        addActive();
    })
})



document.addEventListener('keyup', (e) => {
    // console.log(e.key);

    clearInterval(playSlider);

    if (e.key == 'ArrowLeft') {
        removeActive();
        slideNumber--;        
        if( slideNumber < 0) {
            slideNumber = (numberOfSlide - 1);
        }
        addActive();
    }

    if (e.key == 'ArrowRight') {
        removeActive();
        slideNumber++;
        if( slideNumber > (numberOfSlide - 1) ) {
            slideNumber = 0;
        }
        addActive();
    }


})



















