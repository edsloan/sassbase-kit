$(function() {
	$(document).ready(navMenu);
	$(window).on('resize',navMenu);

	function navMenu() {
		if($(window).width() < 768) {
			$('.nav__menu').hide();
			$('.nav__icon').click(function(e) {
				e.preventDefault();
				$('.nav__menu').toggle();
			});
		} else {
			$('.nav__menu').show();
		}
	}
});