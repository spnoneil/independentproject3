const neighbor = "Won't you be my neighbor, ";
const boop = "Boop!";
const beep = "Beep!";
const nameHTML = $("#output").innerHTML = '<div id="name"></div>';

let robo = function(input) {
  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    outputArray.push(i.toString());
  }

  let robo2 = outputArray.map(function(array) {
    if (array.includes("3")) {
      return array = " " + neighbor + nameHTML;
    } else if (array.includes("2")) {
      return array = " " + boop;
    } else if (array.includes("1")) {
      return array = " " + beep;
    } else {
      return " " + array;
    }
  });
  return robo2;
};


$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    const inputNum = parseInt($("input#inputNum").val());
    const inputName = $("input#nameInput").val();

    $("#outputText").text(robo(inputNum));
    $("#name").text(inputName);
    $("#form1").trigger("reset").hide();
    $("#output").fadeToggle(1500);
  });
  $("#back").click(function() {
    $("#output").hide();
    $("#form1").slideToggle(500);
  })
});