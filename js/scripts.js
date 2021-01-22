const neighbor = "Won't you be my neighbor?";
const boop = "Boop!";
const beep = "Beep!";

let robo = function(input) {
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    outputArray.push(i.toString());
  }
  let robo2 = outputArray.map(function(array) {
    if (array.includes("3")) {
      return array = neighbor;
    } else {
      return array;
    }
  })
  return robo2;
}


$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    const inputNum = parseInt($("input#inputNum").val());
    console.log(robo(inputNum))
  });
});