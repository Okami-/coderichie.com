$(document).ready(function() {
	$nav_li = $(".nav li");
	$nav_li_a = $nav_li.children("a");

	$(".accordion2").hide();
	$('.design-links').hide();
	$('.web-links').hide();
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
		$('.accordion2').show();
	})
	
	$("#home-link").click(function() {
		$('.accordion').show();
		$('.accordion2').hide();
		$('.web-links').hide();
		$('.design-links').hide();
	})
	
	$(".accordion2 > dt.firstchild").click(function(){
		$('.design-links').show();
		$('.web-links').hide();
	})
	
	$(".accordion2 > dt.secondchild").click(function(){
		$('.web-links').show();
		$('.design-links').hide();
	})
	
});