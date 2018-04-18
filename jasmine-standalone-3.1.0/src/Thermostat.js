function Thermostat() {
    this.temp = 20;
    this.max = 25
    this.minimum = 10
    this.powersave = true
}

Thermostat.prototype.upTemp = function() {
    this.temp += 1;
};

Thermostat.prototype.downTemp = function() {
    if (this.temp === this.minimum)
        this.temp = 10;
    else
        this.temp -= 1;
};

Thermostat.prototype.powersaveOn = function() {
    this.max = 25;
    this.powersave = true
};

Thermostat.prototype.powersaveOff = function() {
    this.max = 32;
    this.powersave = false;
};