
(function ($) {
    "use strict";

    


    /*==================================================================
    [ Cart header ]*/
    try {
        $('.wrap-menu-click').each(function(){
            var wrapMenuClick = $(this);

            $(wrapMenuClick).find('.menu-click').on('click', function(e){
                e.stopPropagation();

                if($(this).hasClass('showed')) {
                    $(wrapMenuClick).find('.menu-click').removeClass('show-menu-click showed');
                }
                else {
                    $(wrapMenuClick).find('.menu-click').removeClass('show-menu-click showed');
                    $(this).addClass('show-menu-click showed');
                }
            });

            $(wrapMenuClick).find('.menu-click-child').on('click', function(e){
                e.stopPropagation();
            }); 
        });

        $(window).on('click', function(){
            $('.wrap-menu-click').find('.menu-click').removeClass('show-menu-click showed');
        })
    } catch(er) {console.log(er);}
    

    /*==================================================================
    [ Sweetalert ]*/
   


})(jQuery);