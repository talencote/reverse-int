module.exports = function reverse (n) {
    n = n < 0 ? n * -1 : n;
    return parseInt(n.toString().split('').reverse().join(''));
}
