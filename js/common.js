$(document).ready(function(){

	$('#fullpage').fullpage({

		sectionsColor: ['#fff','#fff','#fff','#ededed','#ededed','#fff'],
		scrolBar: true,
		scrollOverflow:true,
	});


	$('#banner-slider').slick ({
		slidesToShow: 1,
		vertical: true,
		arrows: false,
		asNavFor: '#banner-slider-nav',
		
	});
	$('#banner-slider-nav').slick ({
		asNavFor: '#banner-slider',
		vertical: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	});

	$("#product-slider1").slick({
		slidesToShow: 4,
		centerMode: true,
		asNavFor: '#slider-nav1',
		arrows: false

	});
	
		var all_slide_count;
		all_slide_count = $('#product-slider1').slick("getSlick").slideCount; 

	$('#slider-nav1').slick({
		slidesToShow: 1,
		asNavFor: '#product-slider1',
		variableWidth: true,
		arrows: false,
	});
	$('.slick-slide .next1').click(function(){
		    $("#slider-nav1").slick('slickNext');
		});
	$('.slick-slide .prev1').click(function(){
		    $("#slider-nav1").slick('slickPrev');
		});
		

	/*$('#product-slider').on('init', function(event, slick, currentSlide, nextSlide){
		var all_slide_count;
		var margin_r
		all_slide_count = $(this).slick("getSlick").slideCount; 
		margin_r = ((currentSlide +1 - (all_slide_count / 2).toFixed()) * 48);
    	$('.pager').css({'margin-right': margin_r + 'px', 'transition':'margin-right 0.15s ease'})
	});
	$('#product-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var all_slide_count;
		var margin_r
		all_slide_count = $(this).slick("getSlick").slideCount; 
		margin_r = ((currentSlide +1 - (all_slide_count / 2).toFixed()) * 48);
    	$('.pager').css({'margin-right': margin_r + 'px', 'transition':'margin-right 0.15s ease'})
	});*/

	$("#product-slider2").slick({
		slidesToShow: 4,
		centerMode: true,
		arrows: false,
		asNavFor: '#slider-nav2',
	});


	$('#slider-nav2').slick({
		slidesToShow: 1,
		asNavFor: '#product-slider2',
		variableWidth: true,
		arrows: false,

	});

	$('.slick-slide .next2').click(function(){
	    $("#slider-nav2").slick('slickNext');
	});
	$('.slick-slide .prev2').click(function(){
	    $("#slider-nav2").slick('slickPrev');
	});
});