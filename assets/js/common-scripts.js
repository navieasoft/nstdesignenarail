
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navshown");
            $(".nav-wrap").fadeIn();
        });
        $('.menu-close-btn').click(function () {
            $("body").removeClass("navshown");
            $(".nav-wrap").fadeOut();
        });

        var $window = $(window);
        $('.header-top-dropdown-menu').parent('li').addClass('top-has-sub-nav')
        if ($window.width() > 768) {
            $('.top-has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.header-top-dropdown-menu').fadeIn()
                    $("body").addClass("topsubnavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.header-top-dropdown-menu').fadeOut();
                    $("body").removeClass("topsubnavShown");
                })
            })
        }
    

        $('.header-search-wrapper').each(function () {
            var $$this = $(this);
            $$this.find('.header-search-dropdown').mouseenter(function () {
                $(this).parent('.header-search-dropdown').addClass('dropdown-active');
                $$this.find('.header-search-dropdown').find('ul').fadeIn();
            })
            $$this.find('.header-search-dropdown').mouseleave(function () {
                $(this).parent('.header-search-dropdown').removeClass('dropdown-active');
                $$this.find('.header-search-dropdown').find('ul').fadeOut();
            })

            $$this.find('.header-search-dropdown ul li').click(function () {
                var valText = $(this).text(),
                    showText = $$this.find('.header-search-dropdown > span')
                console.log(valText)
                $('.header-search-dropdown ul li').removeClass('dropdown-inner-active')
                $(this).parents('.header-search-dropdown').addClass('dropdown-inner-active')
                $(this).parents('.header-search-dropdown').addClass('dropdown-inner-active')
                $$this.find('.header-search-dropdown').removeClass('dropdown-active')
                // $$this.find('.header-search-dropdown').find('ul').slideUp();
                showText.text(valText)
            })
        })



        $('.submenu-wrap').parent('li').addClass('has-sub-nav')
        if ($window.width() > 991) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.submenu-wrap').fadeIn()
                    $("body").addClass("subnavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.submenu-wrap').fadeOut();
                    $("body").removeClass("subnavShown");
                })
            })
        }
        $('.fullwidth-submenu-wrap').parent('li').addClass('has-sub-nav')
        if ($window.width() > 991) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.fullwidth-submenu-wrap').addClass("fullwidth-subnavShown");
                    $("body").addClass("subnavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.fullwidth-submenu-wrap').removeClass("fullwidth-subnavShown");
                    $("body").removeClass("subnavShown");
                })
            })
        }

        $('.sub-submenu-wrap').parent('li').addClass('has-sub-sub-nav')
        if ($window.width() > 768) {
            $('.has-sub-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.sub-submenu-wrap').fadeIn()
                    $("body").addClass("sub-subnavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.sub-submenu-wrap').fadeOut();
                    $("body").removeClass("sub-subnavShown");
                })
            })
        }
        $('.sub-submenu-two-wrap').parent('li').addClass('has-sub-sub-two-nav')
        if ($window.width() > 768) {
            $('.has-sub-sub-two-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.sub-submenu-two-wrap').fadeIn()
                    $("body").addClass("sub-sub-twonavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.sub-submenu-two-wrap').fadeOut();
                    $("body").removeClass("sub-sub-twonavShown");
                })
            })
        }

        if ($window.width() < 992) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);
        
                $this.find('> a').click(function (e) {
                    var $$this = $(this);
                    e.preventDefault()
                    console.log('event')
                    $this.find('.submenu-wrap').slideToggle()
                    $$this.toggleClass("submenuShown");
                    $$this.parent($this).toggleClass("submenuShown");
                })
            })
        }
        if ($window.width() < 992) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);
        
                $this.find('> a').click(function (e) {
                    var $$this = $(this);
                    e.preventDefault()
                    console.log('event')
                    $this.find('.fullwidth-submenu-wrap').slideToggle()
                    $$this.toggleClass("submenuShown");
                    $$this.parent($this).toggleClass("submenuShown");
                })
            })
        }
        if ($window.width() < 992) {
            $('.has-sub-sub-nav').each(function () {
                var $this = $(this);
        
                $this.find('> a').click(function (e) {
                    var $$this = $(this);
                    e.preventDefault()
                    console.log('event')
                    $this.find('.sub-submenu-wrap').slideToggle()
                    $$this.toggleClass("sub-submenuShown");
                    $$this.parent($this).toggleClass("sub-submenuShown");
                })
            })
        }
        if ($window.width() < 992) {
            $('.has-sub-sub-two-nav').each(function () {
                var $this = $(this);
        
                $this.find('> a').click(function (e) {
                    var $$this = $(this);
                    e.preventDefault()
                    console.log('event')
                    $this.find('.sub-submenu-two-wrap').slideToggle()
                    $$this.toggleClass("sub-submenu-twoShown");
                    $$this.parent($this).toggleClass("sub-submenu-twoShown");
                })
            })
        }


        $('.fullwidth-content').each(function () {
            var $$this = $(this)
            $$this.find('.fullwidth-content-trigger ul li').mouseenter(function () {
                $$this.find('.fullwidth-content-thumb-wrap .fullwidth-content-thumb').hide();
        
                var activeTab = $(this).find('a').attr('rel');
                $(activeTab).fadeIn();
                return false;
            });
            
        });

        
        $('.fullwidth-tab-trigger ul li a').click(function(){
            $('.fullwidth-tab-trigger ul li a').removeClass('active');
            $(this).addClass('active');
            // $('.fullwidth-tab-item-wrap .fullwidth-tab-item').hide();
            $('.fullwidth-tab-item-wrap .fullwidth-tab-item').removeClass('active-tab');

            var activeTab = $(this).attr('href');
            // $(activeTab).fadeIn();
            $(activeTab).addClass('active-tab');
            return false;
        });


        if($('.fullwidth-tab-slider-item-wrap').length){
            $('.fullwidth-tab-slider-item-wrap').slick({
                dots: true,
                arrows:true,
                autoplay:false,
                autoplaySpeed:5000,
                infinite: false,
                speed: 300,
                slidesToShow:2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow:2,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow:1,
                        }
                    },
                ]
            });
            }
            $(window).on('resize', function () {       
                $('.fullwidth-tab-slider-item-wrap').slick('resize'); 

            });


            if ($('.marquee-text').length) {
                $('.marquee-text').marquee({
                    direction: 'left',
                    duration: 40000,
                    gap: 0,
                    delayBeforeStart: 0,
                    duplicated: true,
                    startVisible: true
                });
            }

            if ($('.home-hero-slider-item-wrap').length) {
                $('.home-hero-slider-item-wrap').slick({
                    arrows: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false,
                    focusOnSelect: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear'
                 
                });
                $(window).on('resize', function () {
                    $('.home-hero-slider-item-wrap').slick('resize');
    
                });
            }
           

            $(document).ready(function() {
                $('.minus').click(function () {
                    var $input = $(this).parent().find('input');
                    var count = parseInt($input.val()) - 1;
                    count = count < 1 ? 1 : count;
                    $input.val(count);
                    $input.change();
                    return false;
                });
                $('.plus').click(function () {
                    var $input = $(this).parent().find('input');
                    $input.val(parseInt($input.val()) + 1);
                    $input.change();
                    return false;
                });
            });
            


            $('.profile-login > a').click(function (e) {
                e.preventDefault()
                $(".profile-login header-top-dropdown-menu.").slideToggle();
            });



            var header = new Headroom(document.querySelector('header'), {
                tolarence: 80,
                offset: 55,
                classes: {
    
                    initial: 'headroom',
                    pinned: 'slidedown',
                    unpinned: 'slideup',
                    top: "headroom--top",
                    notTop: "headroom--not-top",
                    bottom: "headroom--bottom",
                    notBottom: "headroom--not-bottom",
                    frozen: "headroom--frozen",
    
                }
            });
            header.init();



	})// End ready function.
    

})(jQuery)

