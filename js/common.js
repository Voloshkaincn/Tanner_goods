$(document).ready(function(){

	$('#fullpage').fullpage({
		sectionsColor: ['#fff','#fff','#fff','#ededed','#ededed','#fff'],
		scrolBar: true,
		scrollOverflow:true,
		afterRender: function (){
			$('#banner-slider .banner-caption').addClass('caption-show');
		},
		onLeave: function(link,index){
			if (index == 2) {
				$('.img-section.desc-right  .description').addClass('description-show');
			}
			if (index == 4) {
				$('.img-section.desc-left  .description').addClass('description-show');
			}			
		}
	});


	$('#banner-slider').slick ({
		slidesToShow: 1,
		vertical: true,
		arrows: false,
		asNavFor: '#banner-slider-nav',
		autoplay: true,
	});
	$('#banner-slider-nav').slick ({
		asNavFor: '#banner-slider',
		vertical: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down" aria-hidden="true"></i></button>',
	});
	$('#banner-slider').on('afterChange', function(event, slick, currentSlide){
	   $(this).find('.banner-caption').addClass('caption-show');
	});
	$('#banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	   $(this).find('.banner-caption').removeClass('caption-show');
	});

	$("#product-slider1").slick({
		slidesToShow: 4,
		centerMode: true,
		asNavFor: '#slider-nav1',
		autoplay: true,
		arrows: false,
		responsive: [
		{
	      	breakpoint: 991,
	      	settings: {
		        slidesToShow: 3,
		    }
		},
		{
	      	breakpoint: 575,
	      	settings: {
		        slidesToShow: 1
		    }
		}
	    ]

	});

	$('#slider-nav1').slick({
		slidesToShow: 4,
		infinite: true,
		arrows: false,
		asNavFor: '#product-slider1',
        variableWidth: true,

	});
	$('.slick-slide .next1').click(function(){
		    $("#slider-nav1").slick('slickNext');
		});
	$('.slick-slide .prev1').click(function(){
		    $("#slider-nav1").slick('slickPrev');
		});


	$("#product-slider2").slick({
		slidesToShow: 4,
		centerMode: true,
		autoplay: true,
		arrows: false,
		asNavFor: '#slider-nav2',
		responsive: [
		{
	      	breakpoint: 991,
	      	settings: {
		        slidesToShow: 3,
		    }
		},
		{
	      	breakpoint: 480,
	      	settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		    }
		}
	    ]
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