(function jQ2($) {
  // $('.scrollspy')
  //   .scrollSpy();
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
  $('.modal-trigger')
    .leanModal();
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
    $('.loader')
      .finish()
      .fadeOut(600, 'easeOutSine', function present() {
        $('.logoImg')
          .removeClass('turn');
        $('.btn-floating')
          .removeClass('bounceIn');
      });
  });
