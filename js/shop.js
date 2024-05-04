$(document).ready(function(){
    $('.header-slider img:first').show();
    let currentIndex = 0;
    setInterval(function(){
        $('.header-slider img').eq(currentIndex).fadeOut();
        currentIndex = (currentIndex + 1) % $('.header-slider img').length;
        $('.header-slider img').eq(currentIndex).fadeIn();
    }, 3000);
});


