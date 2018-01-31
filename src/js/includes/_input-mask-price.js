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
    applyPriceInputMask(classList);