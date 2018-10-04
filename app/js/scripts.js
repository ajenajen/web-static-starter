// $(document).ready(function(){
//     $(".js-datepicker").datepicker({
//       format: "dd | mm | yyyy",
//       orientation: "top right"
//     });
//   $('.js-open-modal').on('click', function() {
//     $('.js-condition-modal').modal('show');
//   });
//   $(".slider--basic").slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
//   $('.slider--listing').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true,
//   })
//   $(".slider--category").slick({
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 1,
//     variableWidth: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   });
//   $(".js-show-more-video").on('click', function() {
//     $(".js-more-video").fadeToggle();
//     $(this).toggleClass('active');
//   });
//   $(".js-show-more-content").on("click", function() {
//     $(".js-more-content").toggleClass('active');
//     $(this).toggleClass("active");
//   });
//   $(".js-tab-category-btn").on("click", function() {
//     $(".js-tab-category-btn").removeClass("active");
//     $(this).addClass("active");
//   });
//   $(".js-tab-search-btn").on("click", function() {
//     $(".js-tab-search-btn").removeClass("active");
//     $(this).addClass("active");
//   });


//   var scrollLink = $('.section-nav a');

//   // Smooth scrolling
//   scrollLink.click(function (e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top + 10
//     }, 1000);
//   });

//   $('.js-more-desc').each(function (i, div) {
//     var text = $(div).text();

//     if ( $(window).width() > 374 && $(window).width() < 413) {
//         var maxL = 37
//     } else if ( $(window).width() <= 414 && $(window).width() < 768) {
//         var maxL = 40
//     } if ( $(window).width() <= 373) {
//         var maxL = 29
//     } 

//     if (text.length > maxL) {            
//             var begin = text.substr(0, maxL),
//             end = text.substr(maxL);
    
//             $(div).html(begin)
//             .append($('<span class="showmore-link"><a class="js-show-more-desc text pink" href="#"><span class="dots">...</div> Show More</a></span>'))
//             .append($('<span class="hidden" />').html(end));
//    }
//     else {
//               text.hide();
//       }
//     });
  
//     $('.js-show-more-desc').click(function () {
//       $(this).hide();
//       $('.js-more-desc').addClass('active');
//     });




//   $('.mall-nav .mall-nav__wrap .nav-item').click(function(e) {
//     e.preventDefault();
//     $('.mall-nav .mall-nav__wrap .nav-item').removeClass('active');
//     $(this).addClass('active');
//     console.log('click active');
//   });

//     $('.tab-pane .item').click(function() {
//       $('.tab-pane .item').removeClass('active');
//       $(this).addClass('active');  
//       console.log('click active')        
//   });  
// })






