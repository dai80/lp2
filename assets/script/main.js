// swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".voice__carousel", {
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }
    });
});

// アコーディオン
$('.qa__question').on('click', function (e) {
    $(this).toggleClass('open-active')
    var content = $(this).next();

    content.slideToggle();
});

// ページトップボタン
var buttonToTop = $('#back-to-top');
var position = 0;
var speed = 800;

buttonToTop.on('click', function () {

    $("html, body").animate({
        scrollTop: position
    }, speed, "swing");
    return false;

});