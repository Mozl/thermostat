$( document ).ready(function() {
  var thermostat = new Thermostat();

  function raiseTemp() {
    $("#temp_text").html(thermostat.temp);
    thermostat.upTemp();
  }

  $('#hotter').click(function() {
    raiseTemp();
  });

  function lowerTemp() {
    $("#temp_text").html(thermostat.temp);
    thermostat.downTemp();
  }

  $('#cooler').click(function() {
    lowerTemp();
  });

});
