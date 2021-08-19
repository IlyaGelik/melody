$(document).ready(function () {

  let currFloor = 2; //текущий этаж
  let counterUp = $(".counter-up"); //кнопка увеличения этажа
  let counterDown = $(".counter-down"); //кнопка уменьшения этажа
  let floorPath = $(".home-image path"); // каждый отдельный этаж в SVG

  //функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажа
    currFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currFloor); // записываем значение этажа в счетчик справа
  });
    //отслеживаем клик по кнопке вверх
  counterUp.on("click", function(){ 
//проверяем значение этажа, оно должно быть не больше 18
  if(currFloor < 18) { 
      currFloor++;
    usCurrFloor = currFloor.toLocaleString("en-US", {minimumIntegerDigits:2, 
      useGroupping: false}); // форматируем переменную с этаже, чтобы было 02, а не 2
    $(".counter").text(usCurrFloor); //записываем значение этажа в счетчик  справа
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    $(`[data-floor=${usCurrFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
  }
  });
  //отслеживаем клик по кнопке вниз
  counterDown.on("click", function() {
    if(currFloor > 2) {  //проверяем значение этажа, оно должно быть не меньше 2
      currFloor--;
    usCurrFloor = currFloor.toLocaleString("en-US", {minimumIntegerDigits:2, 
      useGroupping: false});  // форматируем переменную с этаже, чтобы было 02, а не 2
    $(".counter").text(usCurrFloor); //записываем значение этажа в счетчик  справа
    floorPath.removeClass("current-floor");  // удаляем активный класс у этажей
    $(`[data-floor=${usCurrFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
  }
  })
});