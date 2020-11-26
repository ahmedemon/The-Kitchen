// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
// $('.owl-carousel').owlCarousel({
//     items:1,
//     margin:10,
//     autoHeight:true
// });


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
           $(".navbar").addClass("active1");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("active1");
        }
    });
});
$(function(){
	$(window).on("scroll",function(){
		if ($(window).scrollTop() > 300 ) {
			$(".nav_menu a").addClass("active2");
		} else {
			$(".nav_menu a").removeClass("active2");
		}
	});
});
$(function(){
	$(window).on("scroll",function(){
		if ($(window).scrollTop() > 300 ) {
			$(".site_name").addClass("name1");
		} else {
			$(".site_name").removeClass("name1");
		}
	});
});
$(function(){
	$(window).on("scroll",function(){
		if ($(window).scrollTop() > 300 ) {
			$(".lni-menu").addClass("lnimenu2");
		} else {
			$(".lni-menu").removeClass("lnimenu2");
		}
	});
});
$(function(){
	$(window).on("scroll",function(){
		if ($(window).scrollTop() > 300 ) {
			$(".navbar-toggler").addClass("navbar-toggler2");
		} else {
			$(".navbar-toggler").removeClass("navbar-toggler2");
		}
	});
});