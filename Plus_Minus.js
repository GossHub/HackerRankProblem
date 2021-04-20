'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function plusMinus(arr) {
    let i;
    let arrP = 0;
    let arrN = 0;
    let arrZ = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            arrP++;
        } else if (arr[i]<0) {
            arrN++;
        } else {
            arrZ++;
        }
    }
    console.log(arrP/arr.length);
    console.log(arrN/arr.length);
    console.log(arrZ/arr.length);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
