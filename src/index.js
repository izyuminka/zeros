module.exports = function getZerosCount(number) {
    let getNun = function(value, multiplier) {
        let result = (value - value%multiplier)/multiplier;
        if (result >= multiplier) {
            result += getNun(result, multiplier);
        }
        return result;
    };
    return getNun(number, 5);
}

