$(function () {

    let current = 0; 
    let slides = $(".slide");

    function showSlide(index) {
        slides.removeClass("active");      
        slides.eq(index).addClass("active");
    }

    $("#next").click(function () {
        current++; 

        if (current >= slides.length) {
            current = 0; 
        }

        showSlide(current);
    });

    $("#prev").click(function () {
        current--; 

        if (current < 0) {
            current = slides.length - 1; 
        }

        showSlide(current);
    });

});
$('.planet').addClass('spin')