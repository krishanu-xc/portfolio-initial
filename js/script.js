$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-button').click(function(){
        $('.menu').toggleClass('active');
        $('.menu-button i').toggleClass('active');
    });
});
$(window).on("load",function(){
    $(".loader-wrap").fadeOut(800);
});