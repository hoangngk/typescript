var myArray;
myArray = ["Bod", "Fred"];
var myArray2 = ["H", '123'];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
