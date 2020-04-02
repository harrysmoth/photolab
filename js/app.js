$(function() {

    // fixed header

    let header = $("#header");  // let - объявление переменной, после объявляем селектор элемента
    let intro = $("#intro");   
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight(); // берем значение высоты элемента into, innerheight считает высоту с padding
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if ( scrollPos > introH ) {
            header.addClass("fixed"); // придаем класс элементу
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth Scrool 

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show"); // при нажатии на элемент меню меню скрывается

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    // Nav Toggle 

    $("#navToggle").on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    // Reviews https://kenwheeler.github.io/slick/

    let slider = $("#reviewsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
             
});