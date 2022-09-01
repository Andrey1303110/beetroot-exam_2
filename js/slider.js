$(document).ready(function () {
    $('.header_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        initialSlide: 0,
        speed: 600,
        vertical: true,
        verticalSwiping: true,
    });
});

$(document).ready(function () {
    if (window.innerWidth <= 854) {
        $(document).ready(function () {
            $('.slider-news').slick({
                arrows: true,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                initialSlide: 2,
                speed: 650,
            });
        });
    }
    else {
        $(document).ready(function () {
            $('.slider-news').slick({
                arrows: true,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                draggable: true,
                initialSlide: 2,
                speed: 950,
            });
        });
    }
});
