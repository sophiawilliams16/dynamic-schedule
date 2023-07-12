// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

$(function () {
    var saveButtons = document.querySelector("#button");

    var taskInput9 = document.querySelector("#text-area9");
    var taskInput10 = document.querySelector("#text-area10");
    var taskInput11 = document.querySelector("#text-area11");
    var taskInput12 = document.querySelector("#text-area12");
    var taskInput13 = document.querySelector("#text-area13");
    var taskInput14 = document.querySelector("#text-area14");
    var taskInput15 = document.querySelector("#text-area15");
    var taskInput16 = document.querySelector("#text-area16");
    var taskInput17 = document.querySelector("#text-area17");

    var tasks = [];

    // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

    // When save button is clicked, save task to local storage
    saveButtons.addEventListener("click", function saveTaskToStorage() {
        // Save inputs to local storage
        localStorage.setItem("hour-9", taskInput9.value);

        localStorage.setItem("hour-10", taskInput10.value);

        localStorage.setItem("hour-11", taskInput11.value);

        localStorage.setItem("hour-12", taskInput12.value);

        localStorage.setItem("hour-13", taskInput13.value);

        localStorage.setItem("hour-14", taskInput14.value);

        localStorage.setItem("hour-15", taskInput15.value);

        localStorage.setItem("hour-16", taskInput16.value);

        localStorage.setItem("hour-17", taskInput17.value);
    });

    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
    var today = dayjs();
    var currentTime = dayjs().format("H");
    var timeSlot = document.querySelector("hour-9");
    
    // Use a for loop to loop through each time slot
    for (var i = 9; i < 18; i++) {
        var hourID = $("#hour-" + i);
        // Use if statement to set conditional classes here
        if (currentTime > i) {
            hourID.addClass("past");
        } else if (currentTime < i) {
            hourID.addClass("future");
        } else {
            hourID.addClass("present");
        }

        // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
        hourID.children("#text-area"+i).text(localStorage.getItem("hour-" + i));
    }

    // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(today.format("MMM D, YYYY HH:MM"));
});
