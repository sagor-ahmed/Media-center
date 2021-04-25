$(document).ready(function () {

    /* slider range */

    // if( $('#slider-range').length){
    // $("#slider-range").slider({
    // range: true,
    // min: 0,
    // max: 500,
    // values: [75,300],
    // slide: function (event,ui){

    // $("#amount").val("$"+ ui.values[0] + "- $" + ui.values[1]);
    // }

    // });


    // $("#amount").val ("$"+ $("#slider-range").slider("values" + 0 ) +  " - $"+  $("#slider-range").slider("values" , 1) );

    // $(".filter-btn").on("click", function(){
    // $(".filter-widget").slideToggle(1000);  

    // });

    // }


    $(function () {
        $("#slider").slider();
    });



    $("#banner-slider").owlCarousel({

        items: 1,
        autoplay: true,
        autoplaySpeed: 600,

    })



    $("#single-product-gallery-slider").owlCarousel({

        items: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false

    });

    $("#recomended-products").owlCarousel({
        items: 4,
        dots: false,
        navContainer: '.nav-holderss',
        navElement: 'span',
        margin: 2,
        responsive: {

            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1092: {
                items: 4
            }
        }

    });


    $("#top-brands-main").owlCarousel({
        items: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        navContainer: '.nav-holders',
        navElement: 'span',
        margin: 30,
        loop: true,
        responsive: {

            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1092: {
                items: 5
            }
        },

    });

    
    $("#recently-viewed-carousel").owlCarousel({
        items: 6,
        dots: false,
        navContainer: '.nav-holder',
        navElement: 'span',
        margin: 2,

        responsive: {

            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1092: {
                items: 6
            }
        },
    });




    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));



    $('.single-product-gallery .horizontal-thumb ').click(function () {
        var $this = $(this),
            owl = $($this.data('target')),
            slideTo = $this.data('slide');
        owl.trigger('to.owl.carousel', slideTo);

        $this.addClass('active').parent().siblings().find('.active').removeClass('active');
        return false;
    });



});
