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
var box12 = document.querySelector(".box-12");

switch12.addEventListener("click", function () {
    sliderbtn.classList.toggle("btn-right");
    card1.classList.toggle("btn-avtive1");
    box12.classList.toggle("year11");
})