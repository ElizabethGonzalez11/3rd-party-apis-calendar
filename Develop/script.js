//make a moment object of the current day and time
//get numeric value of the current hour
//do military time

$(function () {


const currentDay = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
const currentHour = moment().format('h.mm.ss a');

const eight = $('#0800');
const nine = $('#0900');
const ten = $('#1000');
const eleven = $('#1100');
const twelve = $('#1200');
const thirteen = $('#1300');
const fourteen = $('#1400');
const fifteen = $('#1500');
const sixteen = $('1600');

let hour = moment().hours();
let userInput;
let hourSpan;

let interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd').substring(0,3).toUpperCase());
}, 100);


//JSON parse for each item
function initPage () {
  console.log("current hour" + hour);
  var init8 = JSON.parse(localStorage.getItems("0800"));
  eight.val(init9);

  var init9 = JSON

}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//clear the day
//function for save btn. 
