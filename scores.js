"use strict";
$(document).ready(function() {

    //Create two arrays
    let scores = [];
    let students = [];

    var displayScores = function () {
        // write code to calculate the average score
        let total = 0
        for(let i = 0; i < scores.length; i++){
            total += scores[i];
        }
        let scoreAverage = (total / scores.length).toFixed(2);

        // write code to display the scores on the web page
        for (let j = 0; j < students.length; j++){
            $("#scores").val(students.join(""));
        }
        $("#average_score").val(scoreAverage)

    };

    $("#add_button").click(function() {
        // write code to get the data from the form
        let data = $('#last_name').val() + ", " + $('#first_name').val() + ": " + $('#score').val() +"\n"
        // Write code to store the data in an array

        if($("#score").val() === ""){
            alert("Must enter a score")
        }
        else {
            if ($("#first_name").val() === "") {
                alert("Must enter first name")
            } else if ($("#last_name").val() === "") {
                alert("Must enter last name")
            } else {
                students.push(data)
                scores.push(parseFloat($('#score').val()))
            }
        }
        // write code to call the displayScores function above
        displayScores()

        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()

    $("#clear_button").click(function() {
        // write code to delete the data from the arrays
        students.length = 0
        scores.length = 0

        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()

    $("#sort_button").click(function() {
        // write code to sort the scores array
        scores.sort()
        students.sort()
        // write code to call the displayScores function above
        displayScores()
    }); // end click()

    $("#first_name").focus();
}); // end ready()