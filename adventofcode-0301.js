/**
 * Finds coordinates (position) of the number
 *
 * @param {Number} n - number to find position/coordinates for
 * @return {Number[]} - x and y coordinates of the number
 */
let n = 325489;
let steps;
 function position(n) {
    const k = Math.ceil((Math.sqrt(n) - 1) / 2);
    let t = 2 * k + 1;
    let m = Math.pow(t, 2);
    t -= 1;
    if (n >= m - t) {
        return [k - (m - n), -k];
    }
    m -= t;
    if (n >= m - t) {
        return [-k, -k + (m - n)];
    }
    m -= t;
    if (n >= m - t) {
        return [-k + (m - n), k];
    }
    return [k, k - (m - n - t)];
}
console.log(position(n));