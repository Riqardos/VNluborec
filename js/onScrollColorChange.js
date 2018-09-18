var scrolled = false;
			$(document).ready(function() {
	 			$(document).scroll(function () {
	 				console.log('scroll');
					$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
				});
			});