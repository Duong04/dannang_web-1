$(document).ready(function(){
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
            breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
          