$(document).ready(function() {
    setTimeout(function() {
        debugger
        var preloader = document.getElementsByClassName('preloader')[0];
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
            $('.in').removeClass("in").addClass("out");
            $('#left-text').addClass('start-text');
            $('#right-text').addClass('start-text');
        }

    }, 1500);
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#left-text').css('top', scroll);
    $('#right-text').css('top', scroll);
});