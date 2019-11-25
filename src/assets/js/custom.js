jQuery(function($) {'use strict',
	//Parallax Scrolling
	$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		
			$("#promo-one").parallax("50%", 0.3);
			$("#promo-two").parallax("50%", 0.3);
			$("#section10").parallax("50%", 0.8);
			$("#section10a").parallax("50%", 0.3);
			$("#section7").parallax("50%", 0.3);
			$("#promo-three").parallax("50%", 0.3);
			$("#contact-us").parallax("50%", 0.3);
		
	}	
	parallaxInit();		
	
	//Scrolling Animations
	$('.scrollpoint1').waypoint(function() {
		$('.sp-effect1').toggleClass('anim-active1');
		$('.sp-effect1').toggleClass('animated fadeInDown');
	},{offset:'100%'});
	
	$('.scrollpoint2').waypoint(function() {
		$('.sp-effect2').toggleClass('anim-active2');
		$('.sp-effect2').toggleClass('animated fadeInLeft');
	},{offset:'100%'});
	
	$('.scrollpoint3').waypoint(function() {
		$('.sp-effect3').toggleClass('anim-active3');
		$('.sp-effect3').toggleClass('animated fadeInUp');
	},{offset:'100%'});
	
	$('.scrollpoint4').waypoint(function() {
		$('.sp-effect4').toggleClass('anim-active4');
		$('.sp-effect4').toggleClass('animated fadeInRight');
	},{offset:'100%'});

	//Count Options
	$('#portal').waypoint(function() {
		$('.timer').each(count);

		function count(options) {
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
		}
	});
	
	//accordion state change
	$('#accordion-two .panel-default .panel-heading').on('click',function(){'use strict',
		$('.panel-heading').removeClass('active');
		$(this).addClass('active');
	});
	
	//accordion active color change
	$('#accordion-two .panel-default .panel-heading .panel-title a').on('click',function(){'use strict',
		$('.panel-title a').removeClass('panel-title-text');
		$(this).addClass('panel-title-text');
	});

	$(document).ready(function(){
	    $("#open-gif").click(function(){
	        $(".promo-one-slider").slideToggle(1000, 'swing');
	    });
	    $("#close-gif").click(function(){
	        $(".promo-one-slider").slideToggle(1000, 'swing');
	    });
	});
	
});
