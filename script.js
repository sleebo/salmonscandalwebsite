$(function () {
    ssAnim();
});

function ssAnim() {
    $('#blackCircle1').click(function () {
        $(this).animate({
            left: 650,
            top: 100
        });
    });
    $('#blackCircle2').click(function () {
        $(this).animate({
            left: 800,
            top: 350
        });
    });
    $('#blackCircle3').click(function () {
        $(this).animate({
            left: 450,
            top: 500
        });
    });
};

