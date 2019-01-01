jQuery(function ($) {


   /**-------------------------------------------------
    * Fixed Header
    *----------------------------------------------------**/
   $(window).on('scroll', function () {
      if ($(window).scrollTop() > 150) {
         $('.header').addClass('sticky fade_down_effect');
      } else {
         $('.header').removeClass('sticky fade_down_effect');
      }
   });

   /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         // $('#navbarNavDropdown').slideUp();
         $('#navbarNavDropdown').removeClass('show');
         // $(this).parent("li").find(".dropdown-menu").slideToggle();
         // $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });
   }

   $(document).click(function () {
      // $('#navbarNavDropdown').slideUp();
      $('#navbarNavDropdown').removeClass('show');
   })

   /*==========================================================
      WOW Animated
    ======================================================================*/
   var wow = new WOW({
      animateClass: 'animated',
      mobile: false
   });
   wow.init();


   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".BackTo").fadeIn('slow');
      } else {
         $(".BackTo").fadeOut('slow');
      }

   });
   $("body, html").on("click", ".BackTo", function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
   });


});


HTMLElement.prototype.empty = function () {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }
}

$(document).ready(function () {
   // $('#preloader').fadeOut();
   window.FakeLoader.init({
      auto_hide: true
   });
   $('#body-inner').removeClass("load-overlay");
   $('[data-toggle="tooltip"]').tooltip()
   $.scrollIt({
      easing: "ease-out",
      topOffset: -1
   });

   /**-------------------------------------------------
    * Firebase Event Loading
    *----------------------------------------------------**/
   if ($('#schedule-tabs').length > 0) {
      var config = {
         apiKey: "AIzaSyALbtrD0YwstUiBMQdktHY7C7Eu5r1rKOg",
         authDomain: "se-gpa.firebaseapp.com",
         databaseURL: "https://se-gpa.firebaseio.com",
         projectId: "se-gpa",
         storageBucket: "se-gpa.appspot.com",
         messagingSenderId: "1724485077"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

      var eventAPIRef = firebase.database().ref('events');
      eventAPIRef.on('value', function (snapshot) {
         console.log("Events loaded");
         $('#event-tab-pane').empty();
         var data = snapshot.val();
         for (i = 0; i < data.length; i++) {
            var x = data[i];
            $('#event-tab-pane').append(
               '<div class="event-listing wow fadeInUp" data-wow-duration=".5s" data-wow-delay="' + i * 100 + 'ms"><div class="event-slot-time"><span>' + x.time + '</span></div>' + '<div class="event-slot-info"><a><img class="event-slot-image" src="' + x.img + ' " alt=""></a><div class="event-slot-info-content"><h3 class="event-slot-title">' + x.title + '<strong> ' + x.venue + ' </strong></h3><p>' + x.desc + '</p></div></div></div>'
            );
         }
      });
   }

});