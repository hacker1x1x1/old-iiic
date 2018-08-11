$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 95

      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;

      });
    } // End if
  });
});

// (function($){
  
//     var jump=function(e)
//     {
//        if (e){
//            e.preventDefault();
//            var target = $(this).attr("href");
//        }else{
//            var target = location.hash;
//        }

//        $('html,body').animate(
//        {
//            scrollTop: $(target).offset().top
//        },1000,function()
//        {
//            location.hash = target;
//        });

//     }

//     $('html, body').hide()

//     $(document).ready(function()
//     {
//         $('a[href^=#]').bind("click", jump);

//         if (location.hash){
//             setTimeout(function(){
//                 $('html, body').scrollTop(0).show()
//                 jump()
//             }, 1000);
//         }else{
//           $('html, body').show()
//         }
//     });
  
// })(jQuery)