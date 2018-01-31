$(document).ready(function(){


	$('.js-menu-btn').click(function(){
		$(this).toggleClass('expanded');
		$('.js-menu-links').slideToggle().toggleClass('expanded');
	});;


	$('.js-psst-close').on('click', function(){
		var psstToDissmiss = '#' + $(this).attr('data-psst-dismiss');
		$(psstToDissmiss).addClass('psst--dismissed');
	});

	$('.js-psst-show').on('click', function(){
		var psstToShow = '#' + $(this).attr('data-psst-show');
		$(psstToShow).removeClass('psst--dismissed');
	});;


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
	});;


	var animateButton = function(e) {

	  e.preventDefault;
	  //reset animation
	  e.target.classList.remove('animate');
	  
	  e.target.classList.add('animate');
	  setTimeout(function(){
	    e.target.classList.remove('animate');
	  },700);
	};

	var bubblyButtons = document.getElementsByClassName("bubbly-button");

	for (var i = 0; i < bubblyButtons.length; i++) {
	  bubblyButtons[i].addEventListener('click', animateButton, false);
	};


	$('.js-faq-item').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('faq-item--expanded');
	});


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

    });;


	$('.js-new-offer-tip-value-buying').on('click', function(){
		var tipValue = $(this).attr('data-value');
		$('.js-new-offer-buying-curr-1').val(tipValue);
	});

	$('.js-new-offer-tip-value-selling').on('click', function(){
		var tipValue = $(this).attr('data-value');
		$('.js-new-offer-selling-curr-1').val(tipValue);
	});;


    var checking = function(event){
        var data = this.value;
        if( (event.charCode>= 48 && event.charCode <= 57) || event.charCode== 46 ||event.charCode == 0 ){
            if(data.indexOf('.') > -1){
                if(event.charCode== 46){
                    event.preventDefault();
                }
            }
        } else {
            event.preventDefault();
        }
    };

    function applyPriceInputMask(list){
        for(var i=0;i<list.length;i++){
            list[i].addEventListener('keypress',checking);
        }
    }

    var classList = document.getElementsByClassName('js-price-input');
    applyPriceInputMask(classList);;


    $('#selling-offers, #buying-offers').DataTable({
        deferRender:    true,
        "paging":       false,
        "info":         false,
        "searching":    false,
        "columnDefs":  [{
            "orderable": false, 
            "targets":   2 
        }],
    });

    $('#trade-history, #profile-trade-history').DataTable({
        deferRender:    true,
        "paging":       false,
        "info":         false,
        "searching":    false,
    });;


	$('.js-header-user-dropdown-btn').on('click', function(){
		$('.js-header-user-dropdown').toggleClass('header-user-dropdown--active')
	});;


});

