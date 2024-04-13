AOS.init();


$('.slider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const switch12 = document.querySelector(".switch");
const sliderbtn = document.querySelector(".slider-btn");
const card1 = document.querySelector(".card");

switch12.addEventListener("click", function () {
    sliderbtn.classList.toggle("btn-right");
    card1.classList.toggle("btn-avtive1");
})