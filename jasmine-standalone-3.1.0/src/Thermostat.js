function Thermostat() {
    this.temp = 20;
}

Thermostat.prototype.upTemp = function() {
   this.temp += 1
};

Thermostat.prototype.downTemp = function() {
    this.temp -= 1
};