//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function(index, val) {
    $(this).attr('type','tel');
    $(this).focus(function(){
        $(this).inputmask('+375(99)999-99-99',{clearIncomplete: true,clearMaskOnLostFocus: false,
            "onincomplete": function(){maskclear($(this));}
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
    });
});
$('input.phone').focusout(function(event) {
    maskclear($(this));
});

// spoiler 
$('.spoiler').click(function(event){
	$(this).toggleClass('spoiler_active').next().slideToggle(300);
});
	$('.spoiler_small').click(function(event){
		if(window.matchMedia('(max-width: 576px)').matches){
		$(this).toggleClass('spoiler_active').next().slideToggle(300);
	}
	});




//SLIDERS
if($('.slider').length>0){
	$('.slider').slick({
	// autoplay: true,
	infinite: true,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	appendArrows:$('.slider-btn__group'),
	nextArrow:'<button type="button" class="slider__prev slick-prev"></button>',
	prevArrow:'<button type="button" class="slider__next slick-next"></button>',
	// responsive: [{
	// 	breakpoint: 768,
	// 	settings: {	adaptiveHeight: true}
	// 	}]
	});

	  
};



	$('.advertising__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		appendArrows: $('.advertising__arrows'),
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			adaptiveHeight: true
		// 		}
		// 	}
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	});
	var advertising__slider = $('.advertising__slider');
	$('.advertising__slider .slick-prev').on('click', function () {
		$(advertising__slider).slick('slickPrev');
	});
	$('.advertising__slider .slick-next').on('click', function () {
		$(advertising__slider).slick('slickNext');
	});
	$('.advertising-reviews__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 2.5,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		asNavFor: '.advertising-reviews__slider--big',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 568,
				settings: {
					centerMode: true,
					slidesToShow: 1.53
				}
			}
		]
	});
	$('.advertising-reviews__slider--big').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		fade: true,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		asNavFor: '.advertising-reviews__slider',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					fade: true
				}
			}
			// 	{
			// 		breakpoint: 550,
			// 		settings: {
			// 			slidesToShow:1
			// 		}
			// 	}
		]
	});







//wow on
// wow = new WOW({
// 	mobile: false,
// 	offset: 80
  
//   })
// wow.init();

// parallax

if(window.matchMedia('(min-width: 991px)').matches){
		var scene = document.querySelectorAll('.parallax');
			scene.forEach(item=>{
				const picture = item.querySelector('picture');
				picture.classList.toggle('parallax');
				var parallaxInstance = new Parallax(picture);
			})

		}
// //ibg

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
}
	
	ibg();


