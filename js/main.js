$(function () {

  $('.nav__link').on('click', function () {
    $('.nav__link').removeClass('nav__link--active');
    $(this).addClass('nav__link--active');
  })

  $('.nav__link, .logo').on('click', function (event) {

    event.preventDefault();

    let id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);

  })




  const screenHeight = window.screen.height

  $(window).scroll(function () {

    if ($(this).scrollTop() > screenHeight * 0.5) {

      $('.nav').addClass('_hidden');

      $('.nav-btn').addClass('nav-btn--show');

      $('.nav-btn').removeClass('nav-btn--active');

    }


    else {

      $('.nav').removeClass('_hidden');

      $('.nav-btn').removeClass('nav-btn--show');

    }

  })


  $('.nav-btn').on('click', function () {
    $(this).toggleClass('nav-btn--active');

    $('.nav').toggleClass('_hidden');
  })



  $('.main-screen__inner').slick({
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    centerMode: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  })


  const ratingItemsList = document.querySelectorAll('.rating__item');
  const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

  ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;

      //request
    }

    )
  );

  //Работа с корзиной//

  const counterQnt = document.querySelector('.cart-qnt');
  let counterQntValue = 0;

  $('.add-to-cart').on('click', function (event) {

    counterQntValue = counterQntValue + 1;

    counterQnt.innerHTML = counterQntValue;

    const productCard = event.target.closest('.product-card');

  });




  var mixer = mixitup('.products__list');

})