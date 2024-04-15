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
});


const menulist = document.querySelector(".menu-list");
const menuicon = document.querySelector(".menu-icon");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
});

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

const scrolltop1 = document.querySelector(".scrolltop");

scrolltop1.addEventListener("click", function () {
    window.scroll({
        top: 0,
    })
});

const menu1 = document.querySelector(".menu");

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
        menu1.classList.add("menu-color")
    }
    else {
        menu1.classList.remove("menu-color")
    }
});
