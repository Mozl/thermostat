$( document ).ready(function() {
  var thermostat = new Thermostat();

  $('#temp1').css("background-color", thermostat.usage());

  function raiseTemp() {
  thermostat.upTemp();
    $("#temp_text").html(thermostat.temp);
    $('#temp1').css("background-color", thermostat.usage());
  }

  $('#hotterbutton').click(function() {
    raiseTemp();
  });

  function lowerTemp() {
    thermostat.downTemp();
    $("#temp_text").html(thermostat.temp);
    $('#temp1').css("background-color", thermostat.usage());
  }

  $('#coolerbutton').click(function() {
    lowerTemp();
  });

  function resetTemperature() {
    thermostat.resetTemp();
    $("#temp_text").html(thermostat.temp);
    $('#temp1').css("background-color", thermostat.usage());
  }

  $('#resetbutton').click(function() {
    resetTemperature();
  });

  $('#powersavebox').click(function() {
    if (thermostat.powersave === true) {
        thermostat.powersaveOff();
        $("#powersavebox").css("background-color", "red");
        $('#temp1').css("background-color", thermostat.usage());
    }
    else if (thermostat.powersave === false) {
        thermostat.powersaveOn();
        $("#powersavebox").css("background-color", "green");
        $('#temp1').css("background-color", thermostat.usage());
    }
  });

});