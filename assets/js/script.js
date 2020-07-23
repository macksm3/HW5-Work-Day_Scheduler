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
  let hour9Description = "";
  let hour10Description = "";
  let hour11Description = "";
  let hour12Description = "";
  let hour13Description = "";
  let hour14Description = "";
  let hour15Description = "";
  let hour16Description = "";
  let hour17Description = "";
  let scheduleItem = $(".description");
  let daySchedule = ["9","10","11","12","13","14","15","16","17"];

  // day/date at top of page 
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // clock
  const clock = $("#currentTime");
  function updateTime() {
    const now = moment();
    const timeDisplay = now.format("h:mm A");
    currentHour = parseInt(now.format("H"));
    // console.log(currentHour);
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

  // text entry 

  function renderTodos() {
    console.log(`render stored data ${hour9Description}`);
    $(hour9).text(hour9Description);
    console.log(`render stored data ${hour10Description}`);
    $(hour10).text(hour10Description);
    console.log(`render stored data ${hour11Description}`);
    $(hour11).text(hour11Description);
    console.log(`render stored data ${hour12Description}`);
    $(hour12).text(hour12Description);
    console.log(`render stored data ${hour13Description}`);
    $(hour13).text(hour13Description);
    console.log(`render stored data ${hour14Description}`);
    $(hour14).text(hour14Description);
    console.log(`render stored data ${hour15Description}`);
    $(hour15).text(hour15Description);
    console.log(`render stored data ${hour16Description}`);
    $(hour16).text(hour16Description);
    console.log(`render stored data ${hour17Description}`);
    $(hour17).text(hour17Description);

  }

  function init() {
    // Get stored description from localStorage
    // Parsing the JSON string to an object
    let storedHour9 = JSON.parse(localStorage.getItem("block9Store"));
    console.log(storedHour9);
    // If description retrieved from localStorage, update the html
    if (storedHour9 !== null) {hour9Description = storedHour9;}

    let storedHour10 = JSON.parse(localStorage.getItem("block10Store"));
    console.log(storedHour10);
    if (storedHour10 !== null) {hour10Description = storedHour10;}

    let storedHour11 = JSON.parse(localStorage.getItem("block11Store"));
    console.log(storedHour11);
    if (storedHour11 !== null) {hour11Description = storedHour11;}

    let storedHour12 = JSON.parse(localStorage.getItem("block12Store"));
    console.log(storedHour12);
    if (storedHour12 !== null) {hour12Description = storedHour12;}

    let storedHour13 = JSON.parse(localStorage.getItem("block13Store"));
    console.log(storedHour13);
    if (storedHour13 !== null) {hour13Description = storedHour13;}

    let storedHour14 = JSON.parse(localStorage.getItem("block14Store"));
    console.log(storedHour14);
    if (storedHour14 !== null) {hour14Description = storedHour14;}

    let storedHour15 = JSON.parse(localStorage.getItem("block15Store"));
    console.log(storedHour15);
    if (storedHour15 !== null) {hour15Description = storedHour15;}

    let storedHour16 = JSON.parse(localStorage.getItem("block16Store"));
    console.log(storedHour16);
    if (storedHour16 !== null) {hour16Description = storedHour16;}

    let storedHour17 = JSON.parse(localStorage.getItem("block17Store"));
    console.log(storedHour17);
    if (storedHour17 !== null) {hour17Description = storedHour17;}

    // Render todos to the DOM
    renderTodos();
  }
  init();

  // function storeTodos() {
  // }


  // $(hour9).change("input", function(event) {
  //   event.preventDefault();
    // let scheduleText = scheduleItem.this.text();
    // console.log(scheduleItem);
  //   console.log(this.hour9.value());
  // });

  //save button
  $(".saveBtn").on("click", function() {
    // use this??
    // console.log(this.name + " clicked");
    const btnSaveNum = parseInt(this.name);
    console.log(`Save Button Number: ${btnSaveNum}`);
    switch (btnSaveNum) {
      case 9:
        // send hour9 description to local storage
        hour9Description = $(hour9).val().trim();
        console.log(`hour 9 details ${hour9Description}`);
        // Stringify and set description in localStorage 
        localStorage.setItem("block9Store", JSON.stringify(hour9Description));
       break;
      case 10:
        console.log($(hour10).val());
        // send hour10 description to local storage
        hour10Description = $(hour10).val().trim();
        console.log(`hour 10 details ${hour10Description}`);
        // Stringify and set description in localStorage 
        localStorage.setItem("block10Store", JSON.stringify(hour10Description));
        break;
      case 11:
        // send hour11 description to local storage
        console.log($(hour11).val());
        hour11Description = $(hour11).val().trim();
        console.log(`hour 11 details ${hour11Description}`);
        localStorage.setItem("block11Store", JSON.stringify(hour11Description));
        break;
      case 12:
        console.log($(hour12).val());
        // send hour12 description to local storage
        hour12Description = $(hour12).val().trim();
        console.log(`hour 12 details ${hour12Description}`);
        localStorage.setItem("block12Store", JSON.stringify(hour12Description));
        break;
      case 13:
        console.log($(hour13).val());
        // send hour13 description to local storage
        hour13Description = $(hour13).val().trim();
        console.log(`hour 13 details ${hour13Description}`);
        localStorage.setItem("block13Store", JSON.stringify(hour13Description));
        break;
      case 14:
        console.log($(hour14).val());
        // send hour14 description to local storage
        hour14Description = $(hour14).val().trim();
        console.log(`hour 14 details ${hour14Description}`);
        localStorage.setItem("block14Store", JSON.stringify(hour14Description));
        break;
      case 15:
        console.log($(hour15).val());
        // send hour15 description to local storage
        hour15Description = $(hour15).val().trim();
        console.log(`hour 15 details ${hour15Description}`);
        localStorage.setItem("block15Store", JSON.stringify(hour15Description));
        break;
      case 16:
        console.log($(hour16).val());
        // send hour16 description to local storage
        hour16Description = $(hour16).val().trim();
        console.log(`hour 16 details ${hour16Description}`);
        localStorage.setItem("block16Store", JSON.stringify(hour16Description));
        break;
      case 17:
        console.log($(hour17).val());
        // send hour17 description to local storage
        hour17Description = $(hour17).val().trim();
        console.log(`hour 17 details ${hour17Description}`);
        localStorage.setItem("block17Store", JSON.stringify(hour17Description));
        break;
            
      default:
        break;
    }
         // this works for one block
  });

});



