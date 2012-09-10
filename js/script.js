$(document).ready(function() {
	$nav_li = $(".nav li");
	$nav_li_a = $nav_li.children("a");

	$(".accordion2").hide();
	$('.design-links').hide();
	$('.web-links').hide();
	$('.Contact').hide();
	$('.contact-info').hide();
	$('.gallery img').hide();
	
	(function($) {
	
	var allPanels = $('.accordion > dd').hide();
	
	$('.accordion > dt > span').click(function() {
			$this = $(this);
			$target = $this.parent().next();
			
			if(!$target.hasClass('active')){
				allPanels.removeClass('active').slideUp('fast');
				$target.addClass('active').slideDown('fast');
			}
			
			$("#portfolio-link").click(function(event){
				allPanels.slideUp('fast');
					allPanels.removeClass('active');
			})
			
			$("#contact-link").click(function(event){
				allPanels.slideUp('fast');
					allPanels.removeClass('active');
			})
		return false;
		});
	})(jQuery);
	
	$("#portfolio-link").click(function(event) {
		$('.accordion').hide();
		$('.main-content').hide();
		$('.accordion2').show();
		$('.Contact').hide();
		$('.contact-info').hide()
		$('.web-links').hide();
		$('.design-links').hide();
	})
	
	$("#home-link").click(function() {
		$('.accordion').show();
		$('.accordion2').hide();
		$('.web-links').hide();
		$('.design-links').hide();
		$('.main-content').show();
		$('.Contact').hide();
		$('.contact-info').hide()
	})
	
	$(".accordion2 > dt.firstchild").click(function(){
		$('.design-links').show();
		$('.web-links').hide();
	})
	
	$(".accordion2 > dt.secondchild").click(function(){
		$('.web-links').show();
		$('.design-links').hide();
	})
	
	$("#contact-link").click(function(){
		$(".main-content").hide();
		$(".Contact").show();
		$('.accordion').hide();
		$('.accordion2').hide();
		$('.contact-info').show();
	})
	
	$('a').click(function(){
		$('.gallery img').hide();
	})
	
	$('dt').click(function(){
		$('.gallery img').hide();
	})
	
	$('.design-links .helvetica-link').click(function(){
			$('.gallery .helvetica img').show("fast");
	})
	
	$('.design-links .alarm-clock-link').click(function(){
		$('.gallery .alarm_clock img').show("fast");
	})
	
	$('.design-links .compass-link').click(function(){
		$('.gallery .compass img').show("fast");
	})
	
	$('.design-links .hour-glass-link').click(function(){
		$('.gallery .hour_glass img').show("fast");
	})
	
	$('.design-links .power-gym-link').click(function(){
		$('.gallery .power_gym img').show("fast");
	})
	
	$('.web-links .turntable-link').click(function(){
		$('.gallery .turntablebot img').show("fast");
	})
	
	$('.web-links .gestalt-link').click(function(){
		$('.gallery .gestalt img').show("fast");
	})
	
	$('.web-links .homme-link').click(function(){
		$('.gallery .hommecooked img').show("fast");
	})
});