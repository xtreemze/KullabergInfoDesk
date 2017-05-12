(function jQ2($) {
  // $('.scrollspy')
  //   .scrollSpy();
  // $('ul.tabs').tabs({ swipeable: true, responsiveThreshold: 2000 });
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
  $('.modal')
    .modal();
  if (!window.navigator.onLine) {
    $('.onlineOnly')
      .hide();
    hiddenContact = true;
  }
  // end of document ready
}(jQuery));
// end of jQuery name space
$(window)
  .load(function start3() {
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
    //       .delay(100).removeClass('turn');
    //     $('.btn-floating')
    //       .delay(120).removeClass('scale-out');
    //   });
  });
