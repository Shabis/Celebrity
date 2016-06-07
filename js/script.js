$(document).ready(function() {
  var answer1 = prompt("What is your favorite hair color?");
  var answer2 = prompt("What is your favorite city?");
  var answer3 = prompt("What is your favorite cuisine?");

  if (answer1 === 'blond' && answer2 === 'Portland') {
    $('#ryan').show();
  }
  else if (answer1 === 'brunette' && answer3 === 'indian') {
    $('#channing').show();
  }
  else if (answer1 === 'black' || answer2 === 'New York') {
    $('#brad').show();
  }
  else {
    document.write("You should stay single");
  }
});
