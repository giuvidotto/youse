/*------------scrolltrigger------------*/

function animateFrom(elem, direction) {
    direction = direction | 1;
    
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("left")) {
        x = -100;
        y = 0;
    } else if(elem.classList.contains("right")) {
        x = 100;
        y = 0;
    } else if(elem.classList.contains("top")) {
        x = 0,
        y = direction * -100;
    }
    if(elem.classList.contains("ease-1")) {
        delay = .15;
    } else if(elem.classList.contains("ease-2")) {
        delay = .3;
    } else if(elem.classList.contains("ease-3")) {
        delay = .45;
    } else if(elem.classList.contains("ease-4")) {
        delay = .6;
    } else if(elem.classList.contains("ease-5")) {
        delay = .75;
    } else if(elem.classList.contains("ease-6")) {
        delay = .9;
    } else if(elem.classList.contains("ease-7")) {
        delay = 1.05;
    } else if(elem.classList.contains("ease-8")) {
        delay = 1.2;
    } else if(elem.classList.contains("ease-9")) {
        delay = 1.35;
    } else if(elem.classList.contains("ease-10")) {
        delay = 1.5;
    } else{
        delay = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        delay: delay,
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
    });
}
  
function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}

/*------------/scrolltrigger------------*/


/*------------start------------*/

    document.addEventListener("DOMContentLoaded", function() {

        var $item = $('#wrapper .section-7 .list .item');
        
        $.each($item, function(i,obj){
            if(i==$item.length-1){
                gsap.to(obj, {
                    scrollTrigger: {trigger:obj,start:'top center', onEnter: function(){ $item.removeClass('active');$(obj).addClass('active')}, onEnterBack: function(){ $item.removeClass('active');$(obj).addClass('active')}, onLeave: function(){ $(obj).removeClass('active')}, onLeaveBack: function(){ $item.removeClass('active');$(obj).addClass('active')}}
                });
            }else{
                gsap.to(obj, {
                    scrollTrigger: {trigger:obj,end:'top center',endTrigger:$(obj).next(),start:'top center', onEnter: function(){ $item.removeClass('active');$(obj).addClass('active')}, onEnterBack: function(){ $item.removeClass('active');$(obj).addClass('active')}, onLeave: function(){ $(obj).removeClass('active')}, onLeaveBack: function(){ $item.removeClass('active');$(obj).addClass('active')}}
                });
            }
        });
        
        
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".animate").forEach(function(elem) {
            hide(elem); // assure that the element is hidden when scrolled into view
    
            ScrollTrigger.create({
            trigger: elem,
            once: true,
            onEnter: function() { animateFrom(elem) }, 
            /*onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view*/
            });
        });

        //clicks
        var onGoing = 0;
        $(document).on('click', '#wrapper .section-1 .button-1', function(event){
            event.stopPropagation();
            if(onGoing!=1){
                onGoing = 1;
                gsap.to(window, {duration: 2, scrollTo:".section-2", ease: "power3.inOut", onComplete:function(){onGoing=0}});
            }
        });

        $(document).on('click', '#wrapper .menu-2 .link', function(event){
            event.stopPropagation();
            if(onGoing!=1){
                onGoing = 1;
                if(!$(event.target).hasClass('active')){
                    gsap.to(window, {duration: 2, scrollTo:".menu-2", ease: "power3.inOut"});
                    var data = $(event.target).data('article');

                    var $data = $('#wrapper .section-4 .article-'+data);

                    var $active = $('#wrapper .section-4 > .active');
        
                    gsap.to($active, {duration:1, opacity:0, x:40, ease: 'power3.in', onComplete:function(){
                        $active.removeClass('active');

                        $data.addClass('block');

                        gsap.fromTo($data, {opacity:0, x:-40}, {duration:1, opacity:1, x:0, ease: 'power3.out', onComplete:function(){$data.addClass('active').removeClass('block');onGoing = 0}});
                    }});

                    $('#wrapper .menu-2 .link').removeClass('active');

                    $('#wrapper .menu-2 a[data-article='+data+']').addClass('active');
                }
            }
        });

        $(document).on('click', '#wrapper .section-5 .button-1', function(event){
            event.stopPropagation();
            if(onGoing!=1){
                onGoing = 1;
                gsap.to(window, {duration: 2, scrollTo:"#wrapper .section-5 .button-1", ease: "power3.inOut", onComplete:function(){onGoing=0}});
            }
        });
    
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
          clickable: true,
        },
      });

/*------------/start------------*/