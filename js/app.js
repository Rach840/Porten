

//==================СЛАЙДЕРЫ=============================================================================================================================


$(document).ready(function () {
   //!<СЛАЙДЕР>
   $('.partners__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 2000,
      arrows: false,
      variableWidth: true,
      infinite: true,

   });
   $('.slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      dots: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1

            }
         }
      ]
   });



   //!<===ГАЛЛЕРЕЯ ПРОДУКТА===>

   $('.picture-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
      variableWidth: false,

   });

   //!</===ГАЛЛЕРЕЯ ПРОДУКТА===>


   //!</СЛАЙДЕР>



   //!<ДОБАВЛЕНИЕ КЛАССО В МОБИЛЬНОЙ ВЕРСИИ>
   function addModileClass() {
      console.log($(window).width())
      if ($(window).width() < 440) {
         //<ДОБАВЛЕНИЕ>
         $("#spoilers__disable").css({ 'display': 'none' });
         $("#spoilers__disable_2").css({ 'display': 'none' });
         $("#spoilers__disable_3").css({ 'display': 'none' });
         $("#spoilers__disable_4").css({ 'display': 'none' });
         $("#spoilers__disable_5").css({ 'display': 'none' });
         OpenSearch()
      } else {
         //<УДАЛЕНИЕ>
         $("#spoilers__disable").css({ 'display': 'block' });
         $("#spoilers__disable_2").css({ 'display': 'block' });
         $("#spoilers__disable_3").css({ 'display': 'block' });
         $("#spoilers__disable_4").css({ 'display': 'block' });

         $("#spoilers__disable_5").css({ 'display': 'flex' });
         searchActivate()
      }
   }

   $(window).resize(function watchWidth() {
      if ($(window).width() < 440) {
         //<ДОБАВЛЕНИЕ ПРИ ДИНАМИЧЕСКОМ ИЗМЕНЕНИИ ШИРИНЫ ЭКРАНА>   
         $("#spoilers__disable").css({ 'display': 'none' });
         $("#spoilers__disable_2").css({ 'display': 'none' });
         $("#spoilers__disable_3").css({ 'display': 'none' });
         //$("#spoilers__disable_4").css({ 'display': 'none' });
         //$("#spoilers__disable_5").css({ 'display': 'none' });
         OpenSearch()
      } else {
         //<УДАЛЕНИЕ ПРИ ДИНАМИЧЕСКОМ ИЗМЕНЕНИИ ШИРИНЫ ЭКРАНА>
         $("#spoilers__disable").css({ 'display': 'block' });
         $("#spoilers__disable_2").css({ 'display': 'block' });
         $("#spoilers__disable_3").css({ 'display': 'block' });
         $("#spoilers__disable_4").css({ 'display': 'block' });
         $("#spoilers__disable_5").css({ 'display': 'flex' });
         searchActivate()
      }
   })

   //!<ЗАПУСК ФУНКЦИИ>
   addModileClass()
   //!</ЗАПУСК ФУНКЦИИ>

   //!</ДОБАВЛЕНИЕ КЛАССО В МОБИЛЬНОЙ ВЕРСИИ>



   //!<РАСКРЫТИЕ ЗАКРЫТЫХ БЛОКОВ> 
   function colFade() {
      $("#show").click(function show(params) {
         $(".mobile-disable").slideDown();
      })
   }
   function searchActivate(params) {
      $(".open-search__btn").click(function activate() {
         $(".example").toggleClass('form_active');
         $(".open-search__btn").toggleClass("open-search__active");
      })
   }

   //!<ЗАПУСК ФУНКЦИИ>
   colFade()

   //!</ЗАПУСК ФУНКЦИИ>

   //!</РАСКРЫТИЕ ЗАКРЫТЫХ БЛОКОВ> 



   function spoilersFooter(params) {
      $("#footerSpoiler-btn_1").click(function spoilersActive1() {
         $("#spoilers__disable").slideToggle("fast");
         $("#footerSpoiler-btn_1").toggleClass("spoilers__active");
         $("#spoilers__disable_2").slideUp("fast");
         $("#spoilers__disable_3").slideUp("fast");
         $("#spoilers__disable_4").slideUp("fast");
         $("#spoilers__disable_5").slideUp("fast");
      })
      $("#footerSpoiler-btn_2").click(function spoilersActive1(params) {
         $("#spoilers__disable_2").slideToggle("fast");
         $("#spoilers__disable_3").slideToggle("fast");
         $("#footerSpoiler-btn_2").toggleClass("spoilers__active");
         $("#spoilers__disable").slideUp("fast");

         $("#spoilers__disable_4").slideUp("fast");
         $("#spoilers__disable_5").slideUp("fast");

      })
      $("#footerSpoiler-btn_3").click(function spoilersActive1(params) {
         $("#spoilers__disable_4").slideToggle("fast");
         $("#spoilers__disable_5").slideToggle("fast");
         $("#footerSpoiler-btn_3").toggleClass("spoilers__active");
         $("#spoilers__disable").slideUp("fast");
         $("#spoilers__disable_2").slideUp("fast");
         $("#spoilers__disable_3").slideUp("fast");

      })
   }
   //!<ЗАПУСК ФУНКЦИИ>
   spoilersFooter()
   //!</ЗАПУСК ФУНКЦИИ>



   //!<МЕНЮ БУРГЕР>
   function burgerMenu() {
      $(".burger__icon").click(function OpenMenu(params) {
         $(".header__menu").toggleClass("_open");
         $(".header__menu").removeClass("_open__search");
         $(".form_active").removeClass("form_active");
         $(".open-search__btn").removeClass("open-search__active");

      })


   }
   burgerMenu()
   function OpenSearch() {
      $(".open-search__btn").click(function Open(params) {
         $(".header__menu").toggleClass("_open__search");
      });
   };

   //!</МЕНЮ БУРГЕР>



   //!<===СПОИЛЕРЫ===>
   function spoiler() {
      $("#spoiler-btn_1").click(function spoilerActivate(params) {
         $("#spoiler-btn_2").removeClass("_active-spoiler");
         $("#spoiler-btn_3").removeClass("_active-spoiler");
         $("#spoiler-btn_1").toggleClass("_active-spoiler");
         $("#spoiler-content_1").slideToggle("fast");
         $("#spoiler-content_2").slideUp("fast");
         $("#spoiler-content_3").slideUp("fast");
      });
      $("#spoiler-btn_2").click(function spoilerActivate(params) {
         $("#spoiler-btn_1").removeClass("_active-spoiler");
         $("#spoiler-btn_2").toggleClass("_active-spoiler");
         $("#spoiler-content_2").slideToggle("fast");
         $("#spoiler-content_1").slideUp("fast");
         $("#spoiler-content_3").slideUp("fast");

      });
      $("#spoiler-btn_3").click(function spoilerActivate(params) {
         $("#spoiler-btn_1").removeClass("_active-spoiler");
         $("#spoiler-btn_2").removeClass("_active-spoiler");
         $("#spoiler-btn_3").toggleClass("_active-spoiler");
         $("#spoiler-content_3").slideToggle("fast");
         $("#spoiler-content_1").slideUp("fast");
         $("#spoiler-content_2").slideUp("fast");

      });
   }
   spoiler()
   //!</===СПОИЛЕРЫ===>

      
})

