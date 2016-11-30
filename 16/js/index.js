$(document).ready(
  function() {

    $('#signup').on("click", function() {
      var x = this.id;
      $("#" + x).removeClass("s-atbottom");
      $("#" + x).addClass("s-attop");
      $("#login").removeClass("l-attop");
      $("#login").addClass("l-atbottom");

    });

    $('#login').on("click", function() {
      var x = this.id;
      $("#" + x).removeClass("l-atbottom");
      $("#" + x).addClass("l-attop");
      $("#signup").removeClass("s-attop");
      $("#signup").addClass("s-atbottom");

    });

  }

);