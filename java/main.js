$(document).ready(function(){
    $('.header').fadeIn(900);

    $(window).scroll(function() {

        if ($(window).scrollTop()+800 > $('.section3').offset().top) {
            $('.section3').fadeIn(900);
        }
    })

const up=()=>{
    console.log('up')
    $('.po1').animate({top:0},700),
   
   down()
        }
        const down=()=>{
            console.log('down')
            $('.po1').animate({top:50},700),
           up()
                }
up()


})
    
 

