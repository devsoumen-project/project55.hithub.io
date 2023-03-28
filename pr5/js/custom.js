

	$('.regular').slick({
  //centerMode: true,
 // autoplay: true,
 //infinite: false,
 arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        //arrows: true,
        
         slidesToShow: 2,
  slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
       autoplay: true,
        slidesToShow: 1,
		slidesToScroll: 1,
      }
    }
  ]
});




	$('.regular2').slick({
  //centerMode: true,
 // autoplay: true,
 infinite: false,
 arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        //arrows: true,
        
         slidesToShow: 2,
  slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
       autoplay: true,
        slidesToShow: 1,
		slidesToScroll: 1,
      }
    }
  ]
});








 $(window).scroll(function() {
      if ($(this).scrollTop() > 20){  
          $('.nvr').addClass("msticky");
       
      }
      else{
          $('.nvr').removeClass("msticky");
      
      }
  });
  
  
  
  
 


  $(".carousel-item *").addClass("d-none");

// Animate the first slide
setTimeout(function() {
  $(".carousel-item.active *")
    .removeClass("d-none")
    .addClass("animated");
}, 700);

// Animate after the slider changes
$("#testomoniBanner").on("slid.bs.carousel", function(e) {
  // Add .d-none to previous shown slide
  $(".carousel-item *").addClass("d-none");

  // Element for new slide
  var c = e["relatedTarget"];

  // After 0.7 sec slide changes, then make the animation for new slide
  setTimeout(function() {
    $(c)
      .find("*")
      .removeClass("d-none")
      .addClass("animated");
    console.log("c");
  }, 700);
});







var list = document.getElementsByClassName('insrt_pic_in_bg');

for (var i = 0; i < list.length; i++) {
  var src = list[i].getAttribute('data-image-src');
  list[i].style.backgroundImage="url('" + src + "')";
}



  