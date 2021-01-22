$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    const neighbor = "Won't you be my neighbor?";
    const boop = "Boop!";
    const beep = "Beep!";
    const inputNum = $("input#inputNum").val();

    let outputArray = [];

    for (i = 0; i <= inputNum; i++) {
      if (i.includes("3")) {
        outputArray.push(neighbor);
      }
    }
    console.log(outputArray)
  });
});