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
	$('#mobile_device').waypoint(function() {
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
	
	//Scrolling smoother in all Browsers
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;

	var time = 600;
	var distance = 270;

	function wheel(event) {
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle();
		if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
	}

	function handle() {

    $('html, body').stop().animate({
			scrollTop: $(window).scrollTop() - (distance * delta)
    }, time);
}


	$(document).keydown(function (e) {

    switch (e.which) {
			//up
			case 38:
				$('html, body').stop().animate({
					scrollTop: $(window).scrollTop() - distance
				}, time);
				break;

					//down
			case 40:
				$('html, body').stop().animate({
					scrollTop: $(window).scrollTop() + distance
				}, time);
				break;
		}
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