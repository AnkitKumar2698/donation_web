var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
   autoplay:true,
   margin: 10,
   autoplayTimeout:1500,
   autoplayHoverPause:true
});
$('.play').on('click',function(){
   owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
   owl.trigger('stop.owl.autoplay')
});
// pay(){
//   return window.location.href("https://pmny.in/ur81B9crPk7O");
// };