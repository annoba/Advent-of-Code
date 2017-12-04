// newFunction();
// function newFunction() {
//     var sum = 0;
//     for (var i = 1; i < 26; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
//Part 2
var done = false;
function surround(currentY, currentX) {
    var sum = 0;
    if (typeof (arr[currentY - 1]) !== "undefined") {
        if (typeof (arr[currentY - 1][currentX]) !== "undefined") {
            var top = arr[currentY - 1][currentX];
        } else {
            var top = 0;
        }
    } else {
        var top = 0;
    }
    if (typeof (arr[currentY + 1]) != "undefined") {
        if (typeof (arr[currentY + 1][currentX]) !== "undefined") {
            var bot = arr[currentY + 1][currentX];
        } else {
            var bot = 0;
        }
    } else {
        var bot = 0;
    }
    if (typeof (arr[currentY][currentX - 1]) !== "undefined") {
        var left = arr[currentY][currentX - 1];
    } else {
        var left = 0;
    }
    if (typeof (arr[currentY][currentX + 1]) !== "undefined") {
        var right = arr[currentY][currentX + 1];
    } else {
        var right = 0;
    }
    if (typeof (arr[currentY - 1]) != "undefined") {
        if (typeof (arr[currentY - 1][currentX - 1]) !== "undefined") {
            var topL = arr[currentY - 1][currentX - 1];
        } else {
            var topL = 0;
        }
    } else {
        var topL = 0;
    }
    if (typeof (arr[currentY + 1]) != "undefined") {
        if (typeof (arr[currentY + 1][currentX - 1]) !== "undefined") {
            var botL = arr[currentY + 1][currentX - 1];
        } else {
            var botL = 0;
        }
    } else {
        var botL = 0;
    }
    if (typeof (arr[currentY - 1]) != "undefined") {
        if (typeof (arr[currentY - 1][currentX + 1]) !== "undefined") {
            var topR = arr[currentY - 1][currentX + 1];
        } else {
            var topR = 0;
        }
    } else {
        var topR = 0;
    }
    if (typeof (arr[currentY + 1]) != "undefined") {
        if (typeof (arr[currentY + 1][currentX + 1]) !== "undefined") {
            var botR = arr[currentY + 1][currentX + 1];
        } else {
            var botR = 0;
        }
    } else {
        var botR = 0;
    }
    sum += top + bot + left + right + topL + botL + topR + botR;
    return sum;
}
var arr = [];
function checkIf(y, x) {
    if (typeof (arr[y]) != "undefined") {
        if (arr[y][x] > 325489) {
            console.log("FUCKING DONE   " + arr[y][x]);
            done = true;
            doneX = x;
            doneY = y;
        }
    }
}
function matrix(size) {
    arr = [];
    for (var i = 0; i < (size); i++) {
        arr.push([0]);
        for (var j = 0; j < (size - 1); j++) {
            arr[i].push(0);
        }
    }
    var ring = 1;
    var middle = Math.ceil(size / 2) - 1;
    arr[middle][middle] = 1;
    var currentX = middle + 1;
    var currentY = middle + 1;
    var h1Done = false;
    var v1Done = false;
    var h2Done = false;
    var v2Done = false;
    var currentStep = 1;
    for (var item = 1; item < (size * size); item++) {
        var sum = 0;
        if (v1Done == false) {
            if (currentStep < (2 * ring)) {
                currentY -= 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep += 1;
            } else {
                currentY -= 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep = 1;
                v1Done = true;
            }
        } else if (v1Done == true && h1Done == false) {
            if (currentStep < (2 * ring)) {
                currentX -= 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep += 1;
            } else {
                currentX -= 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep = 1;
                h1Done = true;
            }
        } else if (v1Done == true && h1Done == true && v2Done == false) {
            if (currentStep < (2 * ring)) {
                currentY += 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep += 1;
            } else {
                currentY += 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep = 1;
                v2Done = true;
            }
        } else if (v1Done == true && h1Done == true && v2Done == true && h2Done == false) {
            if (currentStep < (2 * ring)) {
                currentX += 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep += 1;
            } else {
                currentX += 1;
                sum = surround(currentY, currentX);
                arr[currentY][currentX] = sum;
                currentStep = 1;
                h1Done = false;
                v1Done = false;
                h2Done = false;
                v2Done = false;
                ring += 1;
                currentX += 1;
                currentY += 1;
            }
        }
        checkIf(currentY, currentX);
        if (done == true) {
            break;
        }
    }
    return arr;
}
for (var i = 3; i < 100; i += 2) {
    console.log("\n\n" + i + "\n\n");
    matrix(i);
    console.log(arr);
    if (done == true) {
        break;
    }
}
