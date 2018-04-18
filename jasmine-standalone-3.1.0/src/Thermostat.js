function Thermostat() {
    this.temp = 20;
}

Thermostat.prototype.incTemp = function(int) {
   this.temp = (this.temp + int)
}; 