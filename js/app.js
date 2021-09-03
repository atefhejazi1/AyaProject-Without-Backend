$(function () {
    // Featured Work Shuffle
    $(".featured-work ul li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $(".shuffle-images .col-md").css("opacity", "1");
        } else {
            $(".shuffle-images .col-md").css("opacity", "0.09");
            $($(this).data('class')).parent().css("opacity", "1");
        }
    });
});