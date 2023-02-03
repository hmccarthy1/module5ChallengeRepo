// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.



$(function () {

var now = dayjs()
console.log(now);

$('div').each(function(index) {
  
if ($(this).hasClass('row')) {

  // console.log($(this))

  if($(this).children(":first").data('hour') > dayjs().hour()) {

    $(this).removeClass(' past present ');

    $(this).addClass('future')

  } else if ( $(this).children(":first").data('hour') < dayjs().hour() ) {

    $(this).removeClass(' future present ');

    $(this).addClass('past')

  } else {

    $(this).removeClass(' future past ');
    $(this).addClass('present')
}}}) 

for (var i = 9; i <= 17; i++) {

  if (localStorage.getItem(i) == null) {

    localStorage.setItem(i, "")
  } else {
  //  $('#' + i).css('background-color', 'red')

  // console.log($('#' + i))
  // // console.log(localStorage.getItem(i))

document.getElementById(i).value = localStorage.getItem(i)

  }
  

}

})



$('.time-block').click( function() {

  // console.log(event.target.classList.contains('saveBtn'))

  if (event.target.classList.contains('saveBtn')) {

    localStorage.setItem($(this).children('div').first().data('hour'), 
    document.getElementById(($(this).children('div').first().data('hour'))).value )
    
    console.log($(this).children('div').first().data('hour'))

    document.getElementById(($(this).children('div').first().data('hour'))).value 


  

}  })
  