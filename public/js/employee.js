"use strict;"

//  Initialize Firebase
//  try {
//    var config = {
//      apiKey: "AIzaSyAm2RSNolPA0-tTI2r6TgdzDjm-WOZzFcg",
//      authDomain: "scheduler-b013c.firebaseapp.com",
//      databaseURL: "https://scheduler-b013c.firebaseio.com",
//      projectId: "scheduler-b013c",
//      storageBucket: "scheduler-b013c.appspot.com",
//      messagingSenderId: "880747413210"
//    };
//    firebase.initializeApp(config);

//  } catch (err) {
//    alert("Database connection failed.");
//  }

//  var database = firebase.database();

 $("#add-employee-btn").on("click", function (event) {
   event.preventDefault();

   // Grabs user input
   var empName = $("#employee-name-input").val().trim();
   var empRole = $("#role-input").val().trim();
   var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
   var empRate = $("#rate-input").val().trim();

   // Creates local "temporary" object for holding employee data
   var newEmp = {
     name: empName,
     role: empRole,
     start: empStart,
     rate: empRate
   };

   // Uploads employee data to the database
   database.ref().push(newEmp);

   // Logs everything to console
   console.log(newEmp.name);
   console.log(newEmp.role);
   console.log(newEmp.start);
   console.log(newEmp.rate);

   alert("Employee successfully added");

   // Clears all of the text-boxes
   $("#employee-name-input").val("");
   $("#role-input").val("");
   $("#start-input").val("");
   $("#rate-input").val("");
 });

 // Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
 database.ref().on("child_added", function (childSnapshot) {
   console.log(childSnapshot.val());

   // Store everything into a variable.
   var empName = childSnapshot.val().name;
   var empRole = childSnapshot.val().role;
   var empStart = childSnapshot.val().start;
   var empRate = childSnapshot.val().rate;

   // Employee Info
   console.log(empName);
   console.log(empRole);
   console.log(empStart);
   console.log(empRate);

   // Prettify the employee start
   var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

   // Calculate the months worked using hardcore math
   // To calculate the months worked
   var empMonths = moment().diff(moment(empStart, "X"), "months");
   console.log(empMonths);

   // Calculate the total billed rate
   var empBilled = empMonths * empRate;
   console.log(empBilled);

   // Create the new row
   var newRow = $("<tr>").append(
     $("<td>").text(empName),
     $("<td>").text(empRole),
     $("<td>").text(empStartPretty),
     $("<td>").text(empMonths),
     $("<td>").text(empRate),
     $("<td>").text(empBilled)
   );

   // Append the new row to the table
   $("#employee-table > tbody").append(newRow);
 });