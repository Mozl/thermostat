$( document ).ready(function() {
var thermostat = new Thermostat();

function raiseTemp() {
    $("#whatever").html(thermostat.temp);    
}
raiseTemp();  
        $('#hotter').click(function() {
            thermostat.upTemp();
            // alert( "Handler for .click() called." );
            raiseTemp();
});
});
