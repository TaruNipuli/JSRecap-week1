'use strict';

    const grade = parseInt(prompt("Enter your score (0 - 100): "));
    switch (true) { 
        // Using true because we are comparing a range of values.
        // For example, the first case will be evaluated as if (true && grade >= 0 && grade <= 39).
        case (grade >= 0 && grade <= 39):
            document.getElementById("result").innerText = "Your grade is 0";
            break;
        case (grade >= 40 && grade <= 51):
            document.getElementById("result").innerText = "Your grade is 1";
            break;
        case (grade >= 52 && grade <= 63):
            document.getElementById("result").innerText = "Your grade is 2";
            break;
        case (grade >= 64 && grade <= 75):
            document.getElementById("result").innerText = "Your grade is 3";
            break;
        case (grade >= 76 && grade <= 87):
            document.getElementById("result").innerText = "Your grade is 4";
            break;
        case (grade >= 88 && grade <= 100):
            document.getElementById("result").innerText = "Your grade is 5";
            break;
        default:
            document.getElementById("result").innerText = "Invalid input";
            break;
    }