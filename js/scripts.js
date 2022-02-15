$(document).ready(function() {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            emCorr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,10}$/,
            message = $('.alert-message', this),
            button = $('.button-form', this);
        email.keyup(function () {
            if (emCorr.test($(this).val())) {
                $(this).parent().parent('.form').children('.button').css('backgroundColor', '#48817B');
            }
            if (!$(this).val() || !emCorr.test($(this).val())) {
                $(this).parent().parent('.form').children('.button').css('backgroundColor', '#C7C7C7')
                // button.css('backgroundColor', '#C7C7C7')
            }
        })
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this);

            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#9C9C9C",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#9C9C9C",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });

    $('.button-up').fancybox();
/*Конец документа*/
});
//# sourceMappingURL=scripts.js.map