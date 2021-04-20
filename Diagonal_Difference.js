'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function diagonalDifference(arr) {
    // Write your code here
    let i;
    let j;
    let sumL = 0;
    let sumR = 0;
    for (i=0; i<arr[0].length; i++) {
        sumL = sumL + arr[i][i];
    }
    i = 0;
    for (j=arr[0].length-1; j>=0; j--) {
        sumR = sumR + arr[i][j];
        i++;
    }
    return Math.abs(sumL-sumR);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
