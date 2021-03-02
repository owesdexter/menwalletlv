
$(document).ready(function(){

    /*------------------------------------------------------------*/
    /*                           Index                            */
    /*------------------------------------------------------------*/
    
    /* Hero-text-box */ 
    $(window).scroll(function(){
        var windowHeight = $( window ).height();
        var windowScrollTop = $(window).scrollTop();
        var bannerHeight = $( '.banner' ).height();
        console.log('windowHeight= ' +windowHeight);
        console.log('windowScrollTop= '+windowScrollTop);
        console.log('bannerHeight= '+bannerHeight);
        
        if((windowHeight + windowScrollTop) >= (bannerHeight)*0.5){
            $('.js--fade-in').fadeIn();
            console.log('exceed!')
        }
    });



    /*------------------------------------------------------------*/
    /*                         Products                           */
    /*------------------------------------------------------------*/
    
    /* Product-1 */
    $('#js--favorite-btn-1').click(function(){
        $('#js--favorite-deleted-1').toggle();
        $('#js--favorite-added-1').toggle();
    })

    $('#js--cart-btn-1').click(function(){
        $('#js--cart-deleted-1').toggle();
        $('#js--cart-added-1').toggle();
    })


    /* Product-2 */
    $('#js--favorite-btn-2').click(function(){
        $('#js--favorite-deleted-2').toggle();
        $('#js--favorite-added-2').toggle();
    })

    $('#js--cart-btn-2').click(function(){
        $('#js--cart-deleted-2').toggle();
        $('#js--cart-added-2').toggle();
    })


    /* Product-3 */
    $('#js--favorite-btn-3').click(function(){
        $('#js--favorite-deleted-3').toggle();
        $('#js--favorite-added-3').toggle();
    })

    $('#js--cart-btn-3').click(function(){
        $('#js--cart-deleted-3').toggle();
        $('#js--cart-added-3').toggle();
    })


    /* Product-4 */
    $('#js--favorite-btn-4').click(function(){
        $('#js--favorite-deleted-4').toggle();
        $('#js--favorite-added-4').toggle();
    })

    $('#js--cart-btn-4').click(function(){
        $('#js--cart-deleted-4').toggle();
        $('#js--cart-added-4').toggle();
    })


    /* Product-5 */
    $('#js--favorite-btn-5').click(function(){
        $('#js--favorite-deleted-5').toggle();
        $('#js--favorite-added-5').toggle();
    })

    $('#js--cart-btn-5').click(function(){
        $('#js--cart-deleted-5').toggle();
        $('#js--cart-added-5').toggle();
    })


    /* Product-6 */
    $('#js--favorite-btn-6').click(function(){
        $('#js--favorite-deleted-6').toggle();
        $('#js--favorite-added-6').toggle();
    })

    $('#js--cart-btn-6').click(function(){
        $('#js--cart-deleted-6').toggle();
        $('#js--cart-added-6').toggle();
    })


    /* Product-7 */
    $('#js--favorite-btn-7').click(function(){
        $('#js--favorite-deleted-7').toggle();
        $('#js--favorite-added-7').toggle();
    })

    $('#js--cart-btn-7').click(function(){
        $('#js--cart-deleted-7').toggle();
        $('#js--cart-added-7').toggle();
    })


    /* Product-8 */
    $('#js--favorite-btn-8').click(function(){
        $('#js--favorite-deleted-8').toggle();
        $('#js--favorite-added-8').toggle();
    })

    $('#js--cart-btn-8').click(function(){
        $('#js--cart-deleted-8').toggle();
        $('#js--cart-added-8').toggle();
    })

       
});