	var ratesItemWidth = 120;
	var ratesScrollSpeed = 200;

	$('.js-rates-next').click(function() {
	  event.preventDefault();
	  $('.js-rates-track').animate({
	    scrollLeft: "+=" + ratesItemWidth
	  }, ratesScrollSpeed);
	});

	 $('.js-rates-prev').click(function() {
	  event.preventDefault();
	  $('.js-rates-track').animate({
	    scrollLeft: "-=" + ratesItemWidth
	  }, ratesScrollSpeed);
	});