$(document).ready(function(){
  /* Маска телефона в input'е формы обратной связи */
  $(".phone-mask").mask("+7 (999) 999-99-99");
  /* Открыть попап с формой заявки */
  $('.header-btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn(100);
  });
  /* Закрыть попап с формой заявки */
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut(100);
  });
  /* Добавление класса active для выбранного вопроса */
  $('.faq-questions-item a').on('click', function(event) {
    event.preventDefault();
    $('.faq-questions-item').removeClass('active');
    $(this).parent().addClass('active');
  });
  /* Закрыть попап с ответом на вопрос */
  $('.answer-close').on('click', function(event) {
    event.preventDefault();
    $('.faq-questions-item').removeClass('active');
  });
  /* Отправка попап формы обратной связи */
  $('.popup-form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку. Скоро мы с Вами свяжемся!");
      $('.popup-form').trigger("reset");
      $('.popup').fadeOut();
    });
    return false;
  });
  /* Отправка формы обратной связи на странице */
  $('.page-form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку. Скоро мы с Вами свяжемся!");
      $('.page-form').trigger("reset");
    });
    return false;
  });
  /* Отображение/скрытие кнопки "Вверх" */
  $(window).scroll(function() {
    if($(this).scrollTop() > 0) {
      $('.toTop-arrow').fadeIn();
    } else {
      $('.toTop-arrow').fadeOut();
    }
  });
  /* скрлл вверх при нажатии на кнопку "Вверх" */
  $('#toTop').on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({scrollTop: 0}, 400); return false;
  });
  /* слайдеры */
  $('.features-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.comfort-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.storage-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="prev arrow"></button>',
    nextArrow: '<button class="next arrow"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.services-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});