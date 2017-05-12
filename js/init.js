(function jQ($) {
  // $('.trails').fadeOut(1).fadeIn(3000);
  // $('.grid').masonry({});
  // $('.button-collapse').sideNav({
  //   menuWidth: 320,
  //   // Default is 240
  //   edge: 'left',
  //   // Choose the horizontal origin
  //   closeOnClick: true,
  //   // Closes side-nav on <a> clicks, useful for Angular/Meteor
  // });
  // $('.scrollspy')
  //   .scrollSpy();
  // $('.slider').slider({
  //   full_width: true,
  //   indicators: true,
  //   height: 600,
  //   transition: 500,
  //   interval: 6000,
  // });
  // $('ul.tabs').tabs({ swipeable: true, responsiveThreshold: 2000 });
  $('.modal')
    .modal(
      // {
      //   ready: function blankScreen() {
      //     $('.trails').fadeOut();
      //   }, // Callback for Modal open
      //   complete: function showScreen() {
      //     $('.trails').fadeIn();
      //   }, // Callback for Modal close
      // }
    );
  // $('.hidden').hide();
  // $('.collapsible').collapsible({
  //   accordion: false,
  // });
  $('.btn-floating.btn-large.red')
    .click(function hamburger() {
      $('.nav-icon4')
        .toggleClass('open');
    });
  $('.tabs-wrapper')
    .pushpin({
      top: $('.tabs-wrapper')
        .offset()
        .top,
      // offset: $('.nav-wrapper').height(),
    });
  /*
   ██████  ███    ██ ██      ██ ███    ██ ███████
  ██    ██ ████   ██ ██      ██ ████   ██ ██
  ██    ██ ██ ██  ██ ██      ██ ██ ██  ██ █████
  ██    ██ ██  ██ ██ ██      ██ ██  ██ ██ ██
   ██████  ██   ████ ███████ ██ ██   ████ ███████
  */
  if (!window.navigator.onLine) {
    $('.onlineOnly')
      .hide();
    hiddenContact = true;
  } else if (window.navigator.onLine) {
    $('.offlineOnly')
      .hide();
    hiddenContact = false;
  }
  // end of document ready
}(jQuery));
// end of jQuery name space
$(document)
  .ready(function start2() {
    // Animate loader to fade out
    $('.logoImg')
      .delay(100)
      .removeClass('turn');
    $('.btn-floating')
      .delay(120)
      .removeClass('scale-out');

    // $('.loader')
    //   .finish()
    //   .delay(10)
    //   .fadeOut(0, 'linear', function present() {
    //     $('.logoImg')
    //       .delay(100)
    //       .removeClass('turn');
    //     $('.btn-floating')
    //       .delay(120)
    //       .removeClass('scale-out');
    //   });
  });
