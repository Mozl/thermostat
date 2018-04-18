describe('Thermostat', function(){

    beforeEach(function() {
        a_thermostat = new Thermostat();
      });

    describe ('Constructor', function() {
        it ('constructs a Thermostat object with a default temp of 20', function() {
            expect (a_thermostat.temp).toEqual(20);
        });

        it ('constructs a Thermostat object with a min temp of 10', function() {
            expect (a_thermostat.minimum).toEqual(10);
        });
    });

    describe ('Increase temp function', function() {
        it ('increases temperature by 1', function() {
            a_thermostat.upTemp();
            expect (a_thermostat.temp).toEqual(21);
        });
    });

    describe ('Decrease temp function', function() {
        it ('decreases temperature by 1', function() {
            a_thermostat.downTemp();
            expect (a_thermostat.temp).toEqual(19);
        });

        it ('cannot go lower than minimum', function(){
            a_thermostat.temp = 10;
            a_thermostat.downTemp();
            expect (a_thermostat.temp).toEqual(10);
        });
    });

    describe ('Powersave', function() {
        it ('when powersave mode is on, max temp is 25', function() {
            a_thermostat.powersaveOn();
            expect (a_thermostat.max).toEqual(25);
        });

        it ('when powersave mode is off, max temp is 32', function() {
            a_thermostat.powersaveOff();
            expect (a_thermostat.max).toEqual(32);
        });
    });
});
