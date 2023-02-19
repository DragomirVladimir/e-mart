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
    autoplaySpeed: 4000,
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

  // const counterQnt = document.querySelector('.cart-qnt');


  // $('.add-to-cart').on('click', function (event) {

  //   counterQntValue = counterQntValue + 1;

  //   counterQnt.innerHTML = counterQntValue;

  //   // const productCard = event.target.closest('.product-card');


  // }); 


  let counterQntValue = 0;

  $('[data-cart]').on('click', function (event) {

    counterQntValue = ++counterQntValue;

    $('.cart-qnt').html(counterQntValue);

    // console.log(event.target.closest('.product-card'));

    const product = event.target.closest('.product-card');

    const productInfo = {
      productId: product.dataset.productId,
      imgSrc: product.querySelector('.product-card__img').getAttribute('src'),
      imgAlt: product.querySelector('.product-card__img').getAttribute('alt'),
      tetle: product.querySelector('.product-card__title').innerText,
      price: product.querySelector('.product-card__price').innerText,
    }

    console.log(productInfo);

  });


  $('.header__link--cart').on('click', function () {
    $('.cart').toggleClass('cart--open');
    $('body').addClass('disable-scroll');
  })

  $('.cart__close-btn').on('click', function () {
    $('.cart').removeClass('cart--open');
    $('body').removeClass('disable-scroll');
  })


  var mixer = mixitup('.products__list');

})