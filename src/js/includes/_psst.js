	$('.js-psst-close').on('click', function(){
		var psstToDissmiss = '#' + $(this).attr('data-psst-dismiss');
		$(psstToDissmiss).addClass('psst--dismissed');
	});

	$('.js-psst-show').on('click', function(){
		var psstToShow = '#' + $(this).attr('data-psst-show');
		$(psstToShow).removeClass('psst--dismissed');
	});