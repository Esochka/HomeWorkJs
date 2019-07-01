// home task 1
function convert(amount) {
    return amount * 8;

}

convert(2)

// home task 2
function reverse(str) {
    let result = '';

    for (let i = str.length; i > 0; i--) {

        result += str[i - 1];


    }
    return result;


}

reverse('abc');


//Task 3
function printStairs(n) {
    let stair = '';
    for (let i = 0; i < n; i++) {
        stair += '#';
        console.log(stair);
    }


}

printStairs(3);

//Task 4
function sumRange(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result = result + i;

    }

    return result;


}

sumRange(2, 4);
sumRange(-1, 3);

//Task 5

function min(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    }
    if (b <= a && b <= c) {
        return b;
    }
    if (c <= a && c <= b) {
        return c;
    }

}

min(10, 5, 11);
min(3, 8, 4);


// Task 6

function printPyramid(n) {


    let spaces = n/2;

    for (let i = 0; i < n; i++) {

        if(i%2 !== 0) {
            continue;
        }

        let row = '';

        for (let k = 0; k <= spaces; k++) {
            row += ' ';
        }
        spaces--;

        for (let s = 0; s <= i; s++) {
            row += '#';
        }

        console.log(row)
    }

}

printPyramid(8);


//Task 7
function firstAndLastToUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length - 1) + str.charAt(str.length - 1).toUpperCase();

}

firstAndLastToUpper('hello');


//Task 8

function cursorCheck(str) {
    str = str.toLowerCase();
    return str.includes('ironman') || str.includes('cursor') || str.includes('ostap');
}

cursorCheck('Hello I am OstaP');

//Task 9
function toUpperCase(str) {

    let result = '';

    for( let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32)
        } else {
            result += str[i];
        }
    }

    return result;

}

toUpperCase('abc');

//Task 10
function removeDuplicationLetters(str) {
    let letters = [];
    let indexes = [];

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        if(str[i] === ' ') {
            continue;
        }

        if(letters.includes(str[i])){
            indexes.push(i);

        } else {
            letters.push(str[i]);
        }

    }

    let result = '';

    for(let i = 0; i < str.length; i++) {
        if (!indexes.includes(i)) {
            result += str[i];
        }
    }

    return result;

}



removeDuplicationLetters('Hello I am Iron Man'); // 'Helo I am rn '


//Task 11
function fibonacci(n) {
    if(n === 1|| n === 2) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n - 2);
}
















