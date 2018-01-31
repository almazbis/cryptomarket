	$('.js-faq-item').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('faq-item--expanded');
	})