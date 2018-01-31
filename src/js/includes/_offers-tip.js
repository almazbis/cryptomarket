	$('.js-new-offer-tip-value-buying').on('click', function(){
		var tipValue = $(this).attr('data-value');
		$('.js-new-offer-buying-curr-1').val(tipValue);
	});

	$('.js-new-offer-tip-value-selling').on('click', function(){
		var tipValue = $(this).attr('data-value');
		$('.js-new-offer-selling-curr-1').val(tipValue);
	});