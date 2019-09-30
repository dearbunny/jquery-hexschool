$(document).ready(function(){
    //  廣告輪播
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        speed: 500,
        loop: true,

        autoplay: {
            delay: 3000,
        },
        effect:"coverflow",
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
    
    // lightbox 效果
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
    });

    // jq-dropdown
    $(".nav-link").click(function (event) { 
        event.preventDefault();
        $(this).toggleClass("active");
        $(this).parent().siblings().find(".dropdown-list").slideUp();
        $(this).parent().siblings().find(".nav-link").removeClass("active");
    });
    // dropdown open
    $(".jq-dropdown").click(function (event) { 
        $(".dropdown-list").slideToggle(500);
    });

    // menu btn
    $(".menu-btn").click(function(event) {
        $("body").toggleClass("open");
    });

    // top
    $(".top a").click(function(event) {
        event.preventDefault();
        //以下核心程式碼
        $("html,body").animate({
            scrollTop: 0
          },
          1000
        );
    });

});