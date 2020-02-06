$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/sc3_ar1.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/sc3_ar2.png"></button>',
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }    
        ]
               
    });
});
      