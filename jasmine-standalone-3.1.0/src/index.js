$( document ).ready(function() {
  var thermostat = new Thermostat();

  function raiseTemp() {
  thermostat.upTemp();
    $("#temp_text").html(thermostat.temp);
    
  }

  $('#hotter').click(function() {
    raiseTemp();
  });

  function lowerTemp() {
    thermostat.downTemp();
    $("#temp_text").html(thermostat.temp);

  }

  $('#cooler').click(function() {
    lowerTemp();
  });

  function resetTemperature() {
    thermostat.resetTemp();
    $("#temp_text").html(thermostat.temp);

  }

  $('#reset').click(function() {
    resetTemperature();
  });

  $('#powersave').click(function() {
    if (thermostat.powersave === true) {
    thermostat.powersaveOff();    
    $("#powersavebox").css("background-color", "red");
    }
    else if (thermostat.powersave === false)
    thermostat.powersaveOn();
    $("#powersavebox").css("background-color", "green");
  });






});
