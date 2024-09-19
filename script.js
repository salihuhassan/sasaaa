function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}



function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}





const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


const promotionCarousel = document.getElementById('promotion-carousel');
const newArrivalCarousel = document.getElementById('new-arrival-carousel');

let promotionIndex = 0;
let newArrivalIndex = 0;

document.getElementById('next-promotion').addEventListener('click', function() {
    promotionIndex++;
    slideCarousel(promotionCarousel, promotionIndex);
});

document.getElementById('prev-promotion').addEventListener('click', function() {
    promotionIndex--;
    slideCarousel(promotionCarousel, promotionIndex);
});

document.getElementById('next-arrival').addEventListener('click', function() {
    newArrivalIndex++;
    slideCarousel(newArrivalCarousel, newArrivalIndex);
});

document.getElementById('prev-arrival').addEventListener('click', function() {
    newArrivalIndex--;
    slideCarousel(newArrivalCarousel, newArrivalIndex);
});

function slideCarousel(carousel, index) {
    const items = carousel.children;
    if (index >= items.length) {
        index = 0;
    } else if (index < 0) {
        index = items.length - 1;
    }
    carousel.style.transform = `translateX(-${index * 270}px)`;
}



document.getElementById('toggle-promo').addEventListener('click', function() {
    const promo = document.querySelector('.promo-offer');
    if (promo.style.display === 'none') {
        promo.style.display = 'block';
    } else {
        promo.style.display = 'none';
    }
});




// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Display confirmation message
    document.getElementById('confirmation-message').classList.remove('hidden');

    // Optionally, you can add code here to handle sending the form data
});
