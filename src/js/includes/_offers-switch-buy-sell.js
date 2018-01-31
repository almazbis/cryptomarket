    $('#switch-offer-type').change(function(){
        var newState = $("input[name='new-offer-type']:checked").val();

        $('.js-new-offer-form').removeClass('new-offer-form--active');
        $('.js-offers-list').removeClass('offers-list--active');
        $('.js-offers-title').removeClass('offers-title--active');

        if(newState == "buy") {
        	$('.js-new-offer-buying').addClass('new-offer-form--active');
        	$('.js-offers-list-buy').addClass('offers-list--active');
        	$('.js-offers-title-buy').addClass('offers-title--active');
        } else {
        	$('.js-new-offer-selling').addClass('new-offer-form--active');
        	$('.js-offers-list-sell').addClass('offers-list--active');
        	$('.js-offers-title-sell').addClass('offers-title--active');
        }

    });