describe('Thermostat', function(){

    beforeEach(function() {
        a_thermostat = new Thermostat();
      });

    describe ('Constructor', function() {
        it ('constructs a Thermostat object with a default temp of 20', function() {
            expect (a_thermostat.temp).toEqual(20);
        });
    });

    describe ('Increase temp function', function() {
        it ('increases temperature by 1', function() {
            a_thermostat.upTemp()
            expect (a_thermostat.temp).toEqual(21);
        });
    });

    describe ('Decrease temp function', function() {
        it ('decreases temperature by 1', function() {
            a_thermostat.downTemp()
            expect (a_thermostat.temp).toEqual(19);
        });
    });
});
