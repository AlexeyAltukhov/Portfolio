$(document).ready(function(){
  /* Переход к блоку "Необходима консультация"" */
  $('.header-btn').on('click', function(event) {
    event.preventDefault();
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $('#consultation').offset ().top - offset
    }, 500);
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