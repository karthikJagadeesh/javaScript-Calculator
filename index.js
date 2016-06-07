$(document).on("ready", function() {
  var result = "", buttons, selectors;

  function makeResult(value) {
    result += value;
    $(".result").val(result);
  }

  /*buttons = {
  '#1': '1',
  '#2': '2',
  '#3': '3',
  '#4': '4',
  '#5': '5',
  '#6': '6',
  '#7': '7',
  '#8': '8',
  '#9': '9',
  '#0': '0',
  '#point': '.',
  '#plus': ' + ',
  '#minus': ' - ',
  '#multiply': ' * ',
  '#divide': ' / '
}*/

    $("#1").on("click", function() {
    makeResult("1");
  });
  $("#2").on("click", function() {
    makeResult("2");
  });
  $("#3").on("click", function() {
    makeResult("3");
  });
  $("#4").on("click", function() {
    makeResult("4");
  });
  $("#5").on("click", function() {
    makeResult("5");
  });
  $("#6").on("click", function() {
    makeResult("6");
  });
  $("#7").on("click", function() {
    makeResult("7");
  });
  $("#8").on("click", function() {
    makeResult("8");
  });
  $("#9").on("click", function() {
    makeResult("9");
  });
  $("#point").on("click", function() {
    makeResult(".");
  });
  $("#plus").on("click", function() {
    makeResult(" + ");
  });
  $("#minus").on("click", function() {
    makeResult(" - ");
  });
  $("#divide").on("click", function() {
    makeResult(" / ");
  });
  $("#multiply").on("click", function() {
    makeResult(" * ");
  });
  $("#0").on("click", function() {
    makeResult("0");
  });

  $("#equals").on("click", function() {
    (result !== "") ? $(".result").val(parseFloat(eval($(".result").val()))): $(".result").val(eval($(".result").val()));
    result = "";
  });

  $(".delButton").on("click", function() {
    result = "";
    $(".result").val(result);
  });

  $("#clear").on("click", function() {
    result = result.split("");
    result.pop();
    result = result.join("");
    $(".result").val(result);
  });

  $(".btn").on("mouseup touchcancel touchend", function() {
    $(this).blur();
  });

});
