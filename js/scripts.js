$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    const neighbor = "Won't you be my neighbor, ";
    const boop = "Boop!";
    const beep = "Beep!";
    let outputArray = [];

    let robo = function(input) {
      for (let i = 0; i <= input; i++) {
        outputArray.push(i.toString());
      }
      let robo2 = outputArray.map(function(array) {
        if (array.includes("3")) {
          return array = " " + neighbor + inputName + "?";
        } else if (array.includes("2")) {
          return array = " " + boop;
        } else if (array.includes("1")) {
          return array = " " + beep;
        } else {
          return " " + array;
        }
      });
      return robo2.join(", ");
    };



    const inputNum = parseInt($("input#inputNum").val());
    const inputName = $("input#inputName").val();

    $("#outputText").text(robo(inputNum));
    $("#form1").trigger("reset").hide();
    $("#output").fadeIn(1500);
    $("#back").click(function() {
      $("#output").hide();
      $("#form1").show(500);
    })
  });
});