(function ($) {

 $('.menu').click(function () {
  $('body').toggleClass('open_menu');
  $('#nav').slideToggle();
 });

 var ctrlVideo = document.getElementById("video");
 $('.playpause').click(function () {
  if ($('.playpause').hasClass("active")) {
   ctrlVideo.pause();
   $('.playpause').toggleClass("active");
  } else {
   ctrlVideo.play();
   $('.playpause').toggleClass("active");
  }

  $("video").bind("pause ended", function () {
   $(".playpause").removeClass("active");
  });

 });

 $('.goals-slider').slick({
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      }
    },
    ]
 });

 $('.goals-slider1').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    ]
 });

 $('.assignment-slider').slick({
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  dots: true,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    },
  ]
 });

 $('.process-slider').slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
 });


})(jQuery);


jQuery(document).ready(function ($) {



});
