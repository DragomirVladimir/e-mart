$(function () {

  $('.main-screen__inner').slick({
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    centerMode: 0,
    arrows: false,
  })


  const ratingItemsList = document.querySelectorAll('.rating__item');
  const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

  ratingItemsArray.forEach(item =>
    item.addEventListener('click', () =>
      item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
  );


})