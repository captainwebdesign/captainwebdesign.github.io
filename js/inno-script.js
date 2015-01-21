(function ($) {
    "use strict";
    $(window).load(function () {
			// Preloader
				$('#status').fadeOut();
				$('#preloader').delay(350).fadeOut('slow'); 
				$('body').delay(350).css({'overflow': 'visible'});
				
			// Top Fix Menu Bar	
				$("#menu-bar").sticky({ topSpacing: 0 });
				
			// Top Slider Area
				$('.slider').fractionSlider({
				'fullWidth': 			true,
				'controls': 			true, 
				'pager': 				true,
				'responsive': 			true,
				'dimensions': 			"1000,580",
				'increase': 			false,
				'pauseOnHover': 		true,
				'slideEndAnimation': 	true
			});
		});
		// Portfolio Effect	
		/* Portfolio Isotop */
			/* initialize shuffle plugin */
			var $grid = $('#grid');
			$grid.shuffle({
				itemSelector: '.item' // the selector for the items in the grid
			});
			/* reshuffle when user clicks a filter item */
			$('#filter a').click(function (e) {
				e.preventDefault();
				// set active class
				$('#filter a').removeClass('active');
				$(this).addClass('active');
				// get group name from clicked item
				var groupName = $(this).attr('data-group');
				// reshuffle grid
				$grid.shuffle('shuffle', groupName );
			});	
		// Bx Slider Script
			$('.slider3').bxSlider({
			slideWidth: 5000,
			minSlides: 2,
			maxSlides: 15,
			slideMargin: 10
		  });
		  // Counter Script	
		   $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
	// jQuery for page scrolling feature - requires jQuery Easing plugin	
	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	//getter	
	
	// Google Location Map Plugin
	var zoom= $('#map_canvas').gmap('option', 'zoom');
	
	$('#map_canvas').gmap().bind('init', function(ev, map) {
		$('#map_canvas').gmap('addMarker', {'position': '22.8046683,89.5883671', 'bounds': true});
		$('#map_canvas').gmap('option', 'zoom', 13);
	});
	// jQuery SelectBox Plugin
	$("#state").selectbox();
	
})(jQuery);