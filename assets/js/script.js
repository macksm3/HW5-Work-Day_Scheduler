// HW5 Work Day Scheduler js File
// document ready 
$(function() {

  // global variables
  const hour9 = $("#hour-9");
  const hour10 = $("#hour-10");
  const hour11 = $("#hour-11");
  const hour12 = $("#hour-12");
  const hour13 = $("#hour-13");
  const hour14 = $("#hour-14");
  const hour15 = $("#hour-15");
  const hour16 = $("#hour-16");
  const hour17 = $("#hour-17");
  
  let currentHour = 0;

  // day/date at top of page 
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // clock
  const clock = $("#currentTime");
  function updateTime() {
    const now = moment();
    const timeDisplay = now.format("h:mm A");
    currentHour = parseInt(now.format("H"));
    console.log(currentHour);
    $(clock).text(timeDisplay);  
    
    // set hour block colors
    if (currentHour === 9) {
      $(hour9).removeClass("past");
      $(hour9).removeClass("future");
      $(hour9).addClass("present");
    }else if (currentHour < 9) {
      $(hour9).removeClass("past");
      $(hour9).removeClass("present");
      $(hour9).addClass("future");
    }else {
      $(hour9).removeClass("present");
      $(hour9).removeClass("future");
      $(hour9).addClass("past");
    }

    if (currentHour === 10) {
      $(hour10).removeClass("past");
      $(hour10).removeClass("future");
      $(hour10).addClass("present");
    }else if (currentHour < 10) {
      $(hour10).removeClass("past");
      $(hour10).removeClass("present");
      $(hour10).addClass("future");
    }else {
      $(hour10).removeClass("present");
      $(hour10).removeClass("future");
      $(hour10).addClass("past");
    }

    if (currentHour === 11) {
      $(hour11).removeClass("past");
      $(hour11).removeClass("future");
      $(hour11).addClass("present");
    }else if (currentHour < 11) {
      $(hour11).removeClass("past");
      $(hour11).removeClass("present");
      $(hour11).addClass("future");
    }else {
      $(hour11).removeClass("present");
      $(hour11).removeClass("future");
      $(hour11).addClass("past");
    }

    if (currentHour === 12) {
      $(hour12).removeClass("past");
      $(hour12).removeClass("future");
      $(hour12).addClass("present");
    }else if (currentHour < 12) {
      $(hour12).removeClass("past");
      $(hour12).removeClass("present");
      $(hour12).addClass("future");
    }else {
      $(hour12).removeClass("present");
      $(hour12).removeClass("future");
      $(hour12).addClass("past");
    }

    if (currentHour === 13) {
      $(hour13).removeClass("past");
      $(hour13).removeClass("future");
      $(hour13).addClass("present");
    }else if (currentHour < 13) {
      $(hour13).removeClass("past");
      $(hour13).removeClass("present");
      $(hour13).addClass("future");
    }else {
      $(hour13).removeClass("present");
      $(hour13).removeClass("future");
      $(hour13).addClass("past");
    }
    
    if (currentHour === 14) {
      $(hour14).removeClass("past");
      $(hour14).removeClass("future");
      $(hour14).addClass("present");
    }else if (currentHour < 14) {
      $(hour14).removeClass("past");
      $(hour14).removeClass("present");
      $(hour14).addClass("future");
    }else {
      $(hour14).removeClass("present");
      $(hour14).removeClass("future");
      $(hour14).addClass("past");
    }

    if (currentHour === 15) {
      $(hour15).removeClass("past");
      $(hour15).removeClass("future");
      $(hour15).addClass("present");
    }else if (currentHour < 15) {
      $(hour15).removeClass("past");
      $(hour15).removeClass("present");
      $(hour15).addClass("future");
    }else {
      $(hour15).removeClass("present");
      $(hour15).removeClass("future");
      $(hour15).addClass("past");
    }

    if (currentHour === 16) {
      $(hour16).removeClass("past");
      $(hour16).removeClass("future");
      $(hour16).addClass("present");
    }else if (currentHour < 16) {
      $(hour16).removeClass("past");
      $(hour16).removeClass("present");
      $(hour16).addClass("future");
    }else {
      $(hour16).removeClass("present");
      $(hour16).removeClass("future");
      $(hour16).addClass("past");
    }

    if (currentHour === 17) {
      $(hour17).removeClass("past");
      $(hour17).removeClass("future");
      $(hour17).addClass("present");
    }else if (currentHour < 17) {
      $(hour17).removeClass("past");
      $(hour17).removeClass("present");
      $(hour17).addClass("future");
    }else {
      $(hour17).removeClass("present");
      $(hour17).removeClass("future");
      $(hour17).addClass("past");
    }
    
  }
  setInterval(updateTime, 1000);
  updateTime();



});



