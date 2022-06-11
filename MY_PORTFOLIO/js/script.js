$(document).ready(function(){

	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});

$(window).on('scroll load', function(){
	$('#menu').removeClass('fa-times');
	$('header').removeClass('toggle');

	if($(window).scrollTop()>0){
		$('.top').show();
	}
	else{
		$('.top').hide();
	}
	
});


//smooth scrolling

$('a[href*="#"]').on('click',function(e){

		e.preventDefault();

		$('html, body').animate({
				scrollTop : $($(this).attr('href')).offset().top,
		},
			500,
			'linear'
		);
});

$('.owl-carousel').owlCarousel({
    // loop:true,
    margin:30,
    nav:true,
    // autoplay:true
    responsive:{
        0:{
            items:1
            // nav:true
        },
        600:{
            items:4
            // nav:true
        },

        1000:{
            items:4
            // nav:true
          
        }

    }
})

});