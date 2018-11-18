$(document).ready(function(){
    $('.slide1').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
				dots: false
            }
        }]
    });
	$('.circle').click(function(){
		var po = $('#content-1').offset().top;
		$('body,html').animate({scrollTop:po},1000);
	});

	$('.nav-link').click(function() {
	    part = $(this).attr('href');
	    position = $(part).offset().top;
	    $('body,html').animate({scrollTop:position},1000);

	});

	/*------------Filter-Character-------------*/
	$('.category_item').click(function(){
		var cate = $(this).attr('id');
		if(cate == 'character'){
			$('#'+cate).css({'font-weight':'bold','color':'#222222'});
			$('#conceptual').css({'font-weight':'normal','color':'#6c6c6c'});
		}else{
			$('#'+cate).css({'font-weight':'bold','color':'#222222'});
			$('#character').css({'font-weight':'normal','color':'#6c6c6c'});
		}
		if(cate == 'all'){
			$('.box-img').fadeOut();
			setTimeout(function(){
				$('.box-img').fadeIn();
			},300);

		}else{
			$('.box-img').fadeOut();

			setTimeout(function(){
				$('.'+cate).fadeIn();
				
			},300)
		}
	});
	
	/*--------------menu-Top-------------*/
	$(window).on('scroll',function(){
	   //var po = window.scrollY;
	   if($(this).scrollTop() > 50){
	      $('#mainNav').addClass('bg-dark');
	      $('#mainNav').css({
	      	'padding-top':'10px',
	      	'transition':'0.4s',
	      	'padding-bottom':'8px'
	      });
	   }else {
	      $('#mainNav').removeClass('bg-dark');
	      $('#mainNav').css('padding-top','30px').css('transition','0.4s');
	   }
	  
	});
	

	/*---------plugin-zoom-magnificPopup-------------*/

	$('#content-5').find('.box').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  
	});
});





				
