// カルーセル
$('.voice__slick').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img src="/assets/image/voice_arrow-left01.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/voice_arrow-right01.png" class="slide-arrow next-arrow">',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});

// アコーディオン
$('.qa-box').on('click', function (e) {
    $(this).toggleClass('open-active')
    var content = $(this).next();

    content.slideToggle();
});

// ページトップボタン
var buttonToTop = $('#button-to-top');
var position = 0;
var speed = 800;

buttonToTop.on('click', function () {

    $("html, body").animate({
        scrollTop: position
    }, speed, "swing");
    return false;

});