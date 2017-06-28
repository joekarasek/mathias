(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/team-left-arrow.png">',
      '<img src="assets/team-right-arrow.png">'
    ],
    autoHeight: true
  });
  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 2,
    navText: [
      '<img src="assets/team-left-arrow.png">',
      '<img src="assets/team-right-arrow.png">'
    ],
    responsive: {
      480: {
        items: 3
      },
      768: {
        items: 4
      }
    },
    margin: 30
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '33.6080687,-117.7019444,17', '33.6080687,-117.7019444,17');


}(jQuery, HelloWorldDevsTysonSteele));

