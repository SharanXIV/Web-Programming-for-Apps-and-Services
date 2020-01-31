/********************************************************************************* *
WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part
of this assignment has been copied manually or electronically from any other source * (including web
sites) or distributed to other students.
*
* Name: Sharan Shanmugaratnam    Student ID: 153601174    Date: Sept 11th, 2019
*
*
********************************************************************************/

// DOM Ready Handler
$(document).ready(function () {
    console.log("jQuery working")
});

// Teams is clicked
$( "#teams-menu" ).on( "click", function() {
    event.preventDefault();

    $.ajax({
        url: "https://fathomless-oasis-93982.herokuapp.com/teams",
        type: "GET",
        contentType: "application/json"
    })
    .done(function (teams) {
        $( "#data" ).empty();
        $( "#data" ).append("<h3>Teams</h3>");
        var teamsJSON = JSON.stringify(teams);
        $( "#data" ).append(teamsJSON);
    })
    .fail(function (err) {
        console.log("error: " + err.statusText);
    });

  });

// Employees is clicked
$( "#employees-menu" ).on( "click", function() {
    event.preventDefault();

    $.ajax({
        url: "https://fathomless-oasis-93982.herokuapp.com/employees",
        type: "GET",
        contentType: "application/json"
    })
    .done(function (employees) {
        $( "#data" ).empty();
        $( "#data" ).append("<h3>Employees</h3>");
        var employeesJSON = JSON.stringify(employees);
        $( "#data" ).append(employeesJSON);
    })
    .fail(function (err) {
        console.log("error: " + err.statusText);
    });

  });

  // Projects is clicked
$( "#projects-menu" ).on( "click", function() {
    event.preventDefault();

    $.ajax({
        url: "https://fathomless-oasis-93982.herokuapp.com/projects",
        type: "GET",
        contentType: "application/json"
    })
    .done(function (projects) {
        $( "#data" ).empty();
        $( "#data" ).append("<h3>Projects</h3>");
        var projectsJSON = JSON.stringify(projects);
        $( "#data" ).append(projectsJSON);
    })
    .fail(function (err) {
        console.log("error: " + err.statusText);
    });

  });

    // Positions is clicked
$( "#positions-menu" ).on( "click", function() {
    event.preventDefault();

    $.ajax({
        url: "https://fathomless-oasis-93982.herokuapp.com/positions",
        type: "GET",
        contentType: "application/json"
    })
    .done(function (positions) {
        $( "#data" ).empty();
        $( "#data" ).append("<h3>Positions</h3>");
        var positionsJSON = JSON.stringify(positions);
        $( "#data" ).append(positionsJSON);
    })
    .fail(function (err) {
        console.log("error: " + err.statusText);
    });

  });