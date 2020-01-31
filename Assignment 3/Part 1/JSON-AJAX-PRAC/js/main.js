/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Heroku URL for part 2: https://fathomless-oasis-93982.herokuapp.com/
*
** Name: Sharan Shanmugaratnam Student ID: 153601174 Date: 2019-10-11
*
*******************************************************************************/

const data = [];

var viewModel = {
    records: ko.observableArray([])
};

function initializeRecords(){
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://fathomless-oasis-93982.herokuapp.com/hospitalRecords",
            type: "GET",
            contentType: "application/json"
        })
            .done(function (data) {
                viewModel.records(data);
                resolve();
            })
            .fail(function (err) {
                reject("Error loading records!");
            });

    });
}

function loadDoc(){
    initializeRecords().then(()=>{
        ko.applyBindings(viewModel, $("body")[0]);
    })
}