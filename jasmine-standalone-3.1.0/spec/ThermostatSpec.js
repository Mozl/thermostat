describe('Thermostat', function(){
    var a_thermostat = new Thermostat();

    describe ('Constructor', function() {
        it ('constructs a Thermostat object with a default temp of 20', function() {
            expect (a_thermostat.temp).toEqual(20);
        });
    });

    describe ('Increase temp function increases temperature by argument degrees', function() {
        it ('increases temperature by passed integer value', function() {
            a_thermostat.incTemp(1)
            expect (a_thermostat.temp).toEqual(21);
        });
    });
});
