// カルーセル
$('.voice__slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  slidesToShow: 3,       // 2枚同時に表示
  slidesToScroll: 3,     // 2枚ずつスクロール
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
      breakpoint: 769,  // 1024px以上で2枚表示
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]

});

