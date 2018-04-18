describe('Thermostat', function(){

    describe ('sets a default temp of 20', function() {
        it ('shows default temp of 20', function() {
            expect (thermostat.deftemp).toEqual(20);
        });
    });
});
