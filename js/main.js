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
    })
  );



  //Cart//

  $('.header__link--cart').on('click', function () {
    $('.cart').toggleClass('cart--open');
    $('body').toggleClass('disable-scroll');
  })

  $('.cart__close-btn').on('click', function () {
    $('.cart').removeClass('cart--open');
    $('body').removeClass('disable-scroll');
  })


  function reountCart() {

    $('.cart-qnt').html($('[data-cart-list] article').length);

  }

  $('[data-cart]').on('click', function (event) {
    event.preventDefault();

    const product = $(this).closest('.product-card');

    const productInfo = {
      productId: product.data('product-id'),
      imgSrc: $('.product-card__img', product).attr('src'),
      imgAlt: $('.product-card__img', product).attr('alt'),
      title: $('.product-card__title', product).text().trim(),
      price: $('.product-card__price', product).text().trim(),
    };


    const cartProduct = `<article class="cart-product" data-id="${productInfo.productId}">
  
      <button class="cart-product__remove-btn" data-remove-product>
        <span class="sr-only">remove from cart</span>
        <span class="cart-product__remove-btn-icon"></span>
      </button>
    
      <div class="cart-product__wrapper">
        <div class="cart-product__main">
          <a class="cart-product__img-link" href="#">
            <img class="cart-product__img" src="${productInfo.imgSrc}" alt="${productInfo.imgAlt}">
          </a>
    
          <div class="cart-product__info">
            <a class="cart-product__title-link" href="#">
              <h1 class="cart-product__title">
                ${productInfo.title}
              </h1>
            </a>
            <div class="cart-product__price">
            ${productInfo.price}
            </div>
          </div>
    
        </div>
    
        <div class="cart-product__counter">
    
          <div class="cart-product__counter-box">
            <button class="cart-product__counter-btn cart-product__counter-btn--minus" type="button"
              data-counter-remove>
            </button>
            <span class="cart-product__counter-value">
              1
            </span>
            <button class="cart-product__counter-btn cart-product__counter-btn--plus" type="button" data-counter-add>
    
            </button>
          </div>
    
          <div class="cart-product__total-price">
            £423.00
          </div>
    
        </div>
      </div>
    
    </article>`;


    const currentCart = $(`[data-cart-list] [data-id="${productInfo.productId}"]`);

    if (currentCart.length) {
      const counterSelect = currentCart.find('.cart-product__counter-value');
      const counterItems = counterSelect.text();

      counterSelect.html(parseInt(counterItems) + 1);
    } else {
      $('[data-cart-list]').append(cartProduct);
    }

    reountCart();


  });


  $(document).on('click', '[data-counter-add]', function () {

    const productCounter = $(this).closest('.cart-product__counter-box');
    const counterValue = productCounter.find('.cart-product__counter-value');
    const counterValueText = counterValue.text();
    counterValue.html(parseInt(counterValueText) + 1);

  })

  $(document).on('click', '[data-counter-remove]', function () {

    const productCounter = $(this).closest('.cart-product__counter-box');
    const counterValue = productCounter.find('.cart-product__counter-value');
    const counterValueText = counterValue.text();

    if (counterValueText >= 2) {

      counterValue.html(parseInt(counterValueText) - 1);

    }

  })


  $(document).on('click', '[data-remove-product]', function () {

    const cartProduct = $(this).closest('.cart-product');

    cartProduct.remove()

    reountCart();
  })





  var mixer = mixitup('.products__list');

});

// const allCartBtn = document.querySelectorAll('.add-to-cart');


  // console.log(allCartBtn);

  // allCartBtn.forEach((button, index) => {
  //   button.addEventListener('click', () => {



  //     console.log("forEach worked", index);





  //   });
  // });