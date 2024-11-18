/*
1. sticky-menu nav-active class script
2. Navscroll addclass script
3. sticky-menu script
4. jQuery countup initialization
5. mixitup projects filter
6. magnific-popup
7. popup gallery
8. magnific-popup video
9. popup media
10. popup-gmaps
11. Line Progress bar js
12. education-slider
13. client logos slider
14. testimonials-slider
15. newsletter form email validation
16. custom cursor
17. Scroll back to top
18. Wow animation
19. GSAP animation
20. website loader js
21. initialCountUp
*/

jQuery(function() {

    jQuery(window).on('scroll', function() {
        /*===================================================================================*/
        /*  sticky-menu nav-active class script
        /*===================================================================================*/
        var scrollTop = jQuery(document).scrollTop();
        var anchors = jQuery('.section-wrap');

        for (var i = 0; i < anchors.length; i++){
            if (scrollTop > jQuery(anchors[i]).offset().top - 10 && scrollTop < jQuery(anchors[i]).offset().top + jQuery(anchors[i]).height() + 10 ) {
                jQuery('.sticky-menu ul li a[href="#' + jQuery(anchors[i]).attr('id') + '"]').addClass('nav-active');
            } else {
                jQuery('.sticky-menu ul li a[href="#' + jQuery(anchors[i]).attr('id') + '"]').removeClass('nav-active');
            }
        }

        /*===================================================================================*/
        /*  Navscroll addclass script
        /*===================================================================================*/
        var Navscroll = jQuery(window).scrollTop();
        if (Navscroll > 150) {
           jQuery('.sticky-menu-area').addClass('sticky-active');
        } else {
           jQuery('.sticky-menu-area').removeClass('sticky-active');
        }
    });

    jQuery(document).ready(function() {

        /*===================================================================================*/
        /*  sticky-menu script
        /*===================================================================================*/
        jQuery('.sticky-menu ul li a.skip_swing').on('click', function() {
            var Lochref = jQuery(this).attr('href');
            jQuery("html, body").stop().animate({
                scrollTop: jQuery(Lochref).offset().top
            }, 1500);
            return false;
        });

        /*===================================================================================*/
        /*  jQuery countup initialization
        /*===================================================================================*/
        initialCountUp();

        /*===================================================================================*/
        /*  mixitup projects filter
        /*===================================================================================*/
        jQuery(document).on('click', '.filter-list button', function() {
            jQuery(".filter-list button").removeClass('current-filter');
            jQuery(this).addClass('current-filter');
        });

        if (jQuery('.project-items').length > 0) {
            var containerEl = document.querySelector('.project-items');
            var mixer = mixitup(containerEl, {
                animation: {
                    duration: 500,
                    effects: 'fade translateX(100%)',
                    easing: 'ease-in-out'
                },
                selectors: {
                    target: '.project-box',
                    control: 'button.filter'
                }
            });
        }

        /*===================================================================================*/
        /*  magnific-popup
        /*===================================================================================*/
        if (jQuery('.popup-media').length > 0) {
            jQuery('.popup-media').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });
        }

        /*===================================================================================*/
        /* popup gallery
        /*===================================================================================*/
        if (jQuery('.has-popup-gallery').length > 0) {
            jQuery('.has-popup-gallery').on('click', function() {
                var gallery = jQuery(this).attr('href');
                jQuery(gallery).magnificPopup({
                    delegate: 'a',
                    type:'image',
                    closeOnContentClick: false,
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    fixedContentPos: false,
                    gallery: {
                        enabled: true
                    }
                }).magnificPopup('open');

                return false;
            });
        }

        /*===================================================================================*/
        /* magnific-popup video
        /*===================================================================================*/
        if (jQuery(".video-button").length > 0) {
            jQuery('.video-button').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                fixedContentPos: false
            });
        }

        /*===================================================================================*/
        /*  popup media
        /*===================================================================================*/
        if (jQuery('.has-popup-media').length > 0) {
            jQuery('.has-popup-media').magnificPopup({
                type:'inline',
                midClick: true
            });
        }

        /*===================================================================================*/
        /*  popup-gmaps
        /*===================================================================================*/
        if (jQuery('.popup-gmaps').length > 0) {
            jQuery('.popup-gmaps').magnificPopup({
                disableOn: 300,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        /*===================================================================================*/
        /*  Line Progress bar js
        /*===================================================================================*/
        if (jQuery('.progress-bar').length > 0) {
            jQuery('.progress-bar').each(function() {
                jQuery(this).find('.progress-content').animate({
                    width:jQuery(this).attr('data-percentage')
                },2000);

                jQuery(this).find('.progress-number-mark').animate({
                    left:jQuery(this).attr('data-percentage')},
                    {duration: 2000,
                    step: function(now, fx) {
                        var data = Math.round(now);
                        jQuery(this).find('.percent').html(data + '%');
                    }
                });
            });
        }

        /*===================================================================================*/
        /*  education-slider
        /*===================================================================================*/
        if (jQuery('.education-slider').length > 0) {
            jQuery(".education-slider").owlCarousel({
                items: 3, // The number of items you want to see on the screen.
                margin: 24, //margin-right(px) on item.
                loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
                autoplay: false, //Autoplay true or false
                mouseDrag: true, // Mouse drag enabled.
                touchDrag: true, // Touch drag enabled.
                navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
                nav: true, // Show next/prev buttons.
                dotsEach: true, //Show dots each x item.
                smartSpeed: 750, // slide speed
                dots: false, //Show dots navigation.
                lazyLoad:true,
                responsive: {
                    0:{
                        items: 1
                    },640:{
                        items: 2
                    },992:{
                        items: 3
                    }
                }
            });
        }

        /*===================================================================================*/
        /*  client logos slider
        /*===================================================================================*/
        if (jQuery('.client-logos').length > 0) {
            jQuery(".client-logos").owlCarousel({
                items: 5, // The number of items you want to see on the screen.
                margin: 60, //margin-right(px) on item.
                loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
                autoplay: true, //Autoplay true or false
                mouseDrag: true, // Mouse drag enabled.
                touchDrag: true, // Touch drag enabled.
                navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
                nav: false, // Show next/prev buttons.
                dotsEach: false, //Show dots each x item.
                smartSpeed: 750, // slide speed
                dots: false, //Show dots navigation.
                lazyLoad:true,
                responsive: {
                    0:{
                        items: 2,
                        margin: 20
                    },480:{
                        items: 3,
                        margin: 30
                    },767:{
                        items: 4,
                        margin: 40
                    },991:{
                        items: 5
                    }
                }
            });
        }

        /*===================================================================================*/
        /*  testimonials-slider
        /*===================================================================================*/
        if (jQuery('.testimonials-slider').length > 0) {
            jQuery(".testimonials-slider").owlCarousel({
                items: 1, // The number of items you want to see on the screen.
                margin: 0, //margin-right(px) on item.
                loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
                autoplay: true, //Autoplay true or false
                mouseDrag: true, // Mouse drag enabled.
                touchDrag: true, // Touch drag enabled.
                navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
                nav: false, // Show next/prev buttons.
                dotsEach: false, //Show dots each x item.
                smartSpeed: 750, // slide speed
                dots: true, //Show dots navigation.
                lazyLoad:true
            }, removeBackground());
        }

        /*===================================================================================*/
        /*  newsletter form email validation
        /*===================================================================================*/
        jQuery('.newsletter-field form').on('submit', function() {
            var nlField = jQuery('.newsletter-field input[type="email"]');
            var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
            if ( nlField.val() == '' || expEmail.test( nlField.val() ) != true ) {
                jQuery(this).next().html('<div class="alert alert-dismissible alert-danger mt-10"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> Please enter correct email address!</div>');
                return false;
            } else {
                return;
            }
        });

        /*===================================================================================*/
        /*  custom cursor
        /*===================================================================================*/
        const cursorHover = document.querySelectorAll('a, button, [type="submit"]');
        const cursorType = document.querySelector('.cursor-circle');
        const cursorType2 = document.querySelector('.cursor-circle2');

        const animateit = function (e) {
            const { offsetX: x, offsetY: y } = e,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        };

        const cursorMove = e => {
            const { clientX: x, clientY: y } = e;
            cursorType.style.left = x + 'px';
            cursorType2.style.left = x + 'px';
            cursorType.style.top = y + 'px';
            cursorType2.style.top = y + 'px';
        };

        cursorHover.forEach((hoverItem) => {
            hoverItem.addEventListener("mouseover", () => { cursorType.classList.add("cursor-hover"); });
            hoverItem.addEventListener("mouseover", () => { cursorType2.classList.add("cursor-hover"); });
            hoverItem.addEventListener("mouseleave", () => { cursorType.classList.remove("cursor-hover"); });
            hoverItem.addEventListener("mouseleave", () => { cursorType2.classList.remove("cursor-hover"); });
        });
        window.addEventListener('mousemove', cursorMove);

        /*===================================================================================*/
        /* Scroll back to top
        /*===================================================================================*/
        if (jQuery('.progress-wrap').length > 0) {
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = jQuery(window).scrollTop();
                var height = jQuery(document).height() - jQuery(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            jQuery(window).scroll(updateProgress);
            var offset = 200;
            var duration = 1400;
            jQuery(window).on('scroll', function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function (event) {
                event.preventDefault();
                jQuery('html, body').animate({
                    scrollTop: 0
                }, duration);
                return false;
            });
        }

        /*===================================================================================*/
        /*  Wow animation
        /*===================================================================================*/
        if (jQuery('.wow').length > 0) {
            jQuery(function(){
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: true,
                    live: true,
                    scrollContainer: null,
                });
                wow.init();
            });
        }

        /*===================================================================================*/
        /*  GSAP animation
        /*===================================================================================*/
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

        let textSplit = jQuery(".text-split");
        if(textSplit.length == 0) return;
        textSplit.each(function(index, resou) {
            gsap.set(resou, {
                perspective: 400
            });
            resou.split = new SplitText(resou, {
                type: "lines,words,chars",
                linesClass: "text-line"
            });
            resou.anim = gsap.to(resou.split.chars, {
                scrollTrigger: {
                    trigger: resou,
                    start: "top 80%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.05,
            });

            // text left animation
            if( jQuery(resou).hasClass('text-anim-left') ){
                gsap.set(resou.split.chars, {
                    x: "-50",
                    opacity: 0,
                    ease: "circ.out",
                });
            }
            // text right animation
            if( jQuery(resou).hasClass('text-anim-right') ){
                gsap.set(resou.split.chars, {
                    x: "50",
                    opacity: 0,
                    ease: "Back.easeOut",
                });
            }
            // text up animation
            if( jQuery(resou).hasClass('text-anim-up') ){
                gsap.set(resou.split.chars, {
                    y: "50",
                    opacity: 0,
                    ease: "circ.out",
                });
            }
            // text down animation
            if( jQuery(resou).hasClass('text-anim-down') ){
                gsap.set(resou.split.chars, {
                    y: "-50",
                    opacity: 0,
                    ease: "circ.out",
                });
            }
            // text fade animation
            if( jQuery(resou).hasClass('text-anim-fade') ){
                gsap.set(resou.split.chars, {
                    opacity: 0,
                    ease: "Back.easeOut",
                });
            }
            // text rotate animation
            if( jQuery(resou).hasClass('text-anim-rotate') ){
                gsap.set(resou.split.chars, {
                    opacity: 0,
                    rotateX: "60deg",
                    ease: "circ.out",
                });
            }
            // text scale animation
            if( jQuery(resou).hasClass('text-anim-scale') ){
                gsap.set(resou.split.chars, {
                    opacity: 0,
                    scale: "0.5",
                    ease: "circ.out",
                });
            }
        });

    });

});

jQuery(window).on('load', function() {

    /*===================================================================================*/
    /*  website loader js
    /*===================================================================================*/
    setTimeout(function(){
        jQuery('.preloder').fadeOut('slow');
    }, 900);

});

/*===================================================================================*/
/*  initialCountUp
/*===================================================================================*/
function initialCountUp() {
    if (jQuery('.counter').length > 0) {
        jQuery('.counter').counterUp({
            delay: 7,
            time: 1500
        });
    }
}

// removeBackground
function removeBackground (){
    setInterval(function(){ jQuery('.owl-loaded').parent('.testimonials-slider-area').css("background","none"); }, 100);
}