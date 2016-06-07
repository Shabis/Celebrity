$(document).ready(function() {
  var answer1 = prompt("What is your favorite hair color?");
  var answer2 = prompt("What is your favorite city?");
  var answer3 = prompt("What is your favorite cuisine?");

  if (answer1 === "blond" && answer2 === "Los Angeles" || "Miami") {
    $("#ryan").show();
  }
});
