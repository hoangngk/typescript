"use strict";
exports.numberRegex = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegex.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
var zipCodeValidator = new ZipCodeValidator();
console.log(zipCodeValidator.isAcceptable('12331'));
