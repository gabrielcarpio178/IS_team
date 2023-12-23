$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".feature-content").addClass("animate__animated animate__fadeInUp");
        }else if(scroll>500&&scroll<=2000){
            $(".state-2").addClass("animate__animated animate__fadeInUp");
        }else{
            $(".vision-mission").addClass("animate__animated animate__fadeInUp");
        }
    });
});