
(function ($) {
    "use strict";


    /*==================================================================
    [ Isotope ]*/
    try {
        var $topeContainer = $('.isotope-grid');
        var $filter = $('.filter-tope-group');

        // filter items on button click
        $filter.each(function () {
            $filter.on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $topeContainer.isotope({filter: filterValue});
            });
            
        });

        // init Isotope
        $(window).on('load', function () {
            var $grid = $topeContainer.each(function () {
                $(this).isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    percentPosition: true,
                    animationEngine : 'best-available',
                    masonry: {
                        columnWidth: '.isotope-item'
                    }
                });
            });
        });

        var isotopeButton = $('.filter-tope-group button');

        $(isotopeButton).each(function(){
            $(this).on('click', function(){
                for(var i=0; i<isotopeButton.length; i++) {
                    $(isotopeButton[i]).removeClass('how-active1');
                }

                $(this).addClass('how-active1');


                if($(this).data('filter') === "*") {
                    $('.isotope-grid-gallery .isotope-item .js-gallery').addClass('js-show-gallery');
                    
                    $('.gallery-lb.isotope-grid-gallery').each(function() {
                        $(this).find('.js-show-gallery').magnificPopup({
                            type: 'image',
                            gallery: {
                                enabled:true
                            },
                            mainClass: 'mfp-fade'
                        });
                    });
                }
                else {
                    $('.isotope-grid-gallery .isotope-item .js-gallery').removeClass('js-show-gallery');
                    $('.isotope-grid-gallery ' + $(this).data('filter') + ' .js-gallery').addClass('js-show-gallery');

                    $('.gallery-lb.isotope-grid-gallery').each(function() {
                        $(this).find('.js-show-gallery').magnificPopup({
                            type: 'image',
                            gallery: {
                                enabled:true
                            },
                            mainClass: 'mfp-fade'
                        });
                    });
                }
            });
        });
    } catch(er) {console.log(er);}
        


    /*==================================================================
    [ Fixed Header ]*/
    try {
        var headerDesktop = $('.container-menu-desktop');
        var wrapMenu = $('.wrap-menu-desktop');

        if($('.top-bar').length > 0) {
            var posWrapHeader = $('.top-bar').height();
        }
        else {
            var posWrapHeader = 0;
        }
        

        if($(window).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        }

        $(window).on('scroll',function(){
            if($(this).scrollTop() > posWrapHeader) {
                $(headerDesktop).addClass('fix-menu-desktop');
                $(wrapMenu).css('top',0); 
            }  
            else {
                $(headerDesktop).removeClass('fix-menu-desktop');
                $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
            } 
        });
    } catch(er) {console.log(er);}
        


    /*==================================================================
    [ Menu mobile ]*/
    try {
        $('.btn-show-menu-mobile').on('click', function(){
            $(this).toggleClass('is-active');
            $('.menu-mobile').slideToggle();
        });

        var arrowMainMenu = $('.arrow-main-menu-m');

        for(var i=0; i<arrowMainMenu.length; i++){
            $(arrowMainMenu[i]).on('click', function(){
                $(this).parent().find('.sub-menu-m').slideToggle();
                $(this).toggleClass('turn-arrow-main-menu-m');
            })
        }

        $(window).on('resize',function(){
            if($(window).width() >= 992){
                if($('.menu-mobile').css('display') === 'block') {
                    $('.menu-mobile').css('display','none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }

                $('.sub-menu-m').each(function(){
                    if($(this).css('display') === 'block') { 
                        $(this).css('display','none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });
                    
            }
        });
    } catch(er) {console.log(er);}
        

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
    try {
        $('.js-addwish-b1, .js-addwish1').on('click', function(e){
            e.preventDefault();
        });

        $('.js-addwish-b1').each(function(){
            var nameProduct = $(this).parent().parent().find('.js-name-b1').html();
            $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");

                $(this).addClass('js-addedwish-b1');
                $(this).removeClass('js-addwish-b1');
                $(this).off('click');
            });
        });

        $('.js-addcart-b1').each(function(){
            var nameProduct = $(this).parent().parent().find('.js-name-b1').html();
            $(this).on('click', function(e){
                e.preventDefault();
                swal(nameProduct, "is added to cart !", "success");
            });
        });


        /*---------------------------------------------*/
        $('.js-addwish1').each(function(){
            var nameProduct = $(this).parent().find('.js-name1').html();
            $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");

                $(this).addClass('js-addedwish1');
                $(this).off('click');
            });
        });

        $('.js-addcart1').each(function(){
            var nameProduct = $(this).parent().parent().find('.js-name1').html();
            $(this).on('click', function(e){
                e.preventDefault();
                swal(nameProduct, "is added to cart !", "success");
            });
        });


    } catch(er) {console.log(er);}
    


    /*==================================================================
    [ Magnific-Popup ]*/
    try {
        $('.gallery-lb').each(function() {
            $(this).find('.js-show-gallery').magnificPopup({
                type: 'image',
                gallery: {
                    enabled:true
                },
                mainClass: 'mfp-fade'
            });
        });
    } catch(er) {console.log(er);}



    /*==================================================================
    [ Show grid / list ]*/
    try {
        $('.js-show-grid').on('click', function(){
            $(this).addClass('menu-active');
            $('.js-show-list').removeClass('menu-active');

            $('.shop-grid').fadeIn();
            $('.shop-list').hide();
        });

        $('.js-show-list').on('click', function(){
            $(this).addClass('menu-active');
            $('.js-show-grid').removeClass('menu-active');

            $('.shop-list').fadeIn();
            $('.shop-grid').hide();
        });
    } catch(er) {console.log(er);}

    /*==================================================================
    [ +/- num product ]*/
    try {
        $('.btn-num-product-down').on('click', function(){
            var numProduct = Number($(this).next().val());
            if(numProduct > 0) $(this).next().val(numProduct - 1);
        });

        $('.btn-num-product-up').on('click', function(){
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });
    } catch(er) {console.log(er);}
        
    /*==================================================================
    [ Rating ]*/
    try {
       $('.wrap-rating').each(function(){
            var item = $(this).find('.item-rating');
            var rated = -1;
            var input = $(this).find('input');
            $(input).val(0);

            $(item).on('mouseenter', function(){
                var index = item.index(this);
                var i = 0;
                for(i=0; i<=index; i++) {
                    $(item[i]).removeClass('fa-star-o');
                    $(item[i]).addClass('fa-star');
                }

                for(var j=i; j<item.length; j++) {
                    $(item[j]).addClass('fa-star-o');
                    $(item[j]).removeClass('fa-star');
                }
            });

            $(item).on('click', function(){
                var index = item.index(this);
                rated = index;
                $(input).val(index+1);
            });

            $(this).on('mouseleave', function(){
                var i = 0;
                for(i=0; i<=rated; i++) {
                    $(item[i]).removeClass('fa-star-o');
                    $(item[i]).addClass('fa-star');
                }

                for(var j=i; j<item.length; j++) {
                    $(item[j]).addClass('fa-star-o');
                    $(item[j]).removeClass('fa-star');
                }
            });
        });
    } catch(er) {console.log(er);}
        
    /*==================================================================
    [ Show/hide panel1 ]*/
    try {
        $('.js-toggle-panel1').on('click', function(){
            $(this).parent().parent().find('.js-panel1').slideToggle();
        });
    } catch(er) {console.log(er);}

        
    /*==================================================================
    [ Show/hide Reply cmt ]*/
    try {
        $('.js-show-reply-cmt').on('click', function(e){
            e.preventDefault();
            $(this).parent().parent().parent().find('.js-reply-cmt').show();
            $(this).addClass('how-active2');
        });

        $('.js-hide-reply-cmt').on('click', function(e){
            e.preventDefault();
            $(this).parent().parent().hide();
            $(this).parent().parent().parent().find('.js-show-reply-cmt').removeClass('how-active2');
        });
    } catch(er) {console.log(er);}


})(jQuery);