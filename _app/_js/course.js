$(document).ready(function () {
    /* Якорь */
    $("a[href='#packet']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    // Cookies
    function cookClear() {
        $('.button-cookies-no').on('click', function () {
            localStorage.removeItem('cook', 'cookYes');
            $.fancybox.close($('.modal-cookies'));
        });
    }

    function cookSet() {
        $('.button-cookies-yes').on('click', function () {
            localStorage.setItem('cook', 'cookYes');
            $.fancybox.close($('.modal-cookies'));
        });
    }
    cookClear();
    cookSet();

    $('.button-cookies-yes').attr('disabled', !$('.check-cookies').prop('checked'));
    $('.check-cookies').change(function () {
        $('.button-cookies-yes').attr('disabled', !$('.check-cookies').prop('checked'));
    });
    if (!localStorage.getItem('cook', 'cookYes')) {
        $.fancybox.open($('.modal-cookies'));
        cookSet();
        cookClear();
    }
    // Кнопка оплаты
    $('.button-cost').on('click', function () {
        window.location.href = "https://py.pl/nhG4X";
    }).attr('disabled', !$('.check-cost').prop('checked'));
    // $('.button-cost').attr('disabled', !$('.check-cost').prop('checked'));
    $('.check-cost').change(function () {
        $('.button-cost').attr('disabled', !$('.check-cost').prop('checked')).toggleClass('button-cost-disabled');
    });

    // модалка
    $('.button-up').fancybox();
    // слайдер с видео-отзывами
    $('.revs-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        appendArrows: '.video-revs-arrows-1',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        adaptiveHeight: true,
        centerMode: true,
        appendArrows: '.video-revs-arrows-2',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.slick-dots').wrap('<div class="container container-revs">')

    function imToVideo() {
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв"><div class="yt-button"></div>');
        });
        $(".video-wrapper-revs img, .yt-button").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
        });
    }
    $('.revs-slider').on('swipe', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('afterChange', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('beforeChange', function (event, slick, direction) {
        imToVideo();
    });
    /* Видео */
    $(".video-wrapper-revs img, .yt-button").click(imToVideo());
    /*Конец документа*/
});