$(function(){
  //register scrollspy to the body
  $('body').scrollspy({target: '#main-navbar', offset:58});

  //add smooth scrolling on all links inside the navbar
  $('#main-navbar a').on('click', function(event) {
    //make sure this.hash has a value before overriding default behaviour
    if(this.hash !== ""){
      //prevent default anchor click behaviour
      event.preventDefault();

      //store hash
      var hash = this.hash;
      //use kQuery.animate to add smooth pafe scrollspy
      //use 800 ms time to frame preform scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        //add hash (#) to URL when done scrolling
        //this will make our URL bar to match where we are on the page
        window.location.hash = hash;
      });
    }
  });
});
