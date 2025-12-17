let numArray = [];

function reverseString() {
    const input = document.getElementById('reverseInput').value;
    const result = input.split('').reverse().join('');
    document.getElementById('reverseResult').textContent = `Result: ${result}`;
}

function extractChars() {
    const input = document.getElementById('extractInput').value;
    if (input.length >= 4) {
        const chars = input.charAt(2) + input.charAt(3);
        document.getElementById('extractResult').textContent = `Result: "${chars}"`;
    } else {
        document.getElementById('extractResult').textContent = "Need 4+ characters";
    }
}

function findLongestWord() {
    const input = document.getElementById('longestInput').value;
    const words = input.split(' ');
    let longest = '';
    words.forEach(word => {
        if (word.length > longest.length) longest = word;
    });
    document.getElementById('longestResult').textContent = `Result: "${longest}"`;
}

function toLowercase() {
    const input = document.getElementById('lowercaseInput').value;
    document.getElementById('lowercaseResult').textContent = `Result: ${input.toLowerCase()}`;
}

function toUppercase() {
    const input = document.getElementById('uppercaseInput').value;
    document.getElementById('uppercaseResult').textContent = `Result: ${input.toUpperCase()}`;
}

function countWordsSymbols() {
    const input = document.getElementById('wordsInput').value;
    const words = input.split(' ').filter(w => w.length > 0).length;
    const symbols = (input.match(/[^\w\s]/g) || []).length;
    document.getElementById('wordsResult').textContent = `Words: ${words}, Symbols: ${symbols}`;
}

function createArray() {
    const input = document.getElementById('arrayInput').value;
    numArray = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    document.getElementById('arrayResult').textContent = `Array: [${numArray.join(', ')}]`;
}

function showThird() {
    if (numArray.length >= 3) {
        document.getElementById('thirdElement').textContent = `Third: ${numArray[2]}`;
    } else {
        document.getElementById('thirdElement').textContent = "Array needs 3+ items";
    }
}

function getThird() {
    if (numArray.length >= 3) {
        document.getElementById('thirdElement2').textContent = `Result: ${numArray[2]}`;
    } else {
        document.getElementById('thirdElement2').textContent = "Create array first";
    }
}

function findLast() {
    const input = document.getElementById('lastArrayInput').value;
    const arr = input.split(',').map(i => i.trim());
    if (arr.length > 0 && arr[0] !== '') {
        document.getElementById('lastElement').textContent = `Result: "${arr[arr.length-1]}"`;
    } else {
        document.getElementById('lastElement').textContent = "Array empty";
    }
}

function getTenth() {
    const input = prompt("Enter text (min 10 chars):");
    if (input && input.length >= 10) {
        document.getElementById('tenthChar').textContent = `Result: "${input.charAt(9)}"`;
    } else {
        document.getElementById('tenthChar').textContent = "Text too short";
    }
}

function doubleArray() {
    const input = document.getElementById('mapInput').value;
    const arr = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    const doubled = arr.map(n => n * 2);
    document.getElementById('mapResult').textContent = `Result: [${doubled.join(', ')}]`;
}

function spliceDelete() {
    const input = document.getElementById('spliceInput').value;
    const start = parseInt(document.getElementById('spliceIndex').value) || 0;
    const count = parseInt(document.getElementById('spliceCount').value) || 1;
    const arr = input.split(',').map(i => i.trim());
    arr.splice(start, count);
    document.getElementById('spliceResult').textContent = `Result: [${arr.join(', ')}]`;
}

function calculate() {
    const n1 = parseFloat(document.getElementById('opNum1').value);
    const n2 = parseFloat(document.getElementById('opNum2').value);
    const op = document.getElementById('operation').value;
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('operationResult').textContent = "Enter numbers";
        return;
    }
    let result;
    if (op === 'add') result = n1 + n2;
    else if (op === 'subtract') result = n1 - n2;
    else if (op === 'multiply') result = n1 * n2;
    else if (op === 'divide') result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
    document.getElementById('operationResult').textContent = `Result: ${result}`;
}

function addNumbers() {
    const n1 = parseFloat(document.getElementById('addNum1').value);
    const n2 = parseFloat(document.getElementById('addNum2').value);
    if (!isNaN(n1) && !isNaN(n2)) {
        document.getElementById('addResult').textContent = `Result: ${n1 + n2}`;
    } else {
        document.getElementById('addResult').textContent = "Enter numbers";
    }
}

function multiplyNumbers() {
    const n1 = parseFloat(document.getElementById('multiplyNum1').value);
    const n2 = parseFloat(document.getElementById('multiplyNum2').value);
    if (!isNaN(n1) && !isNaN(n2)) {
        document.getElementById('multiplyResult').textContent = `Result: ${n1 * n2}`;
    } else {
        document.getElementById('multiplyResult').textContent = "Enter numbers";
    }
}

function divideNumbers() {
    const n1 = parseFloat(document.getElementById('divideNum1').value);
    const n2 = parseFloat(document.getElementById('divideNum2').value);
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('divideResult').textContent = "Enter numbers";
        return;
    }
    if (n2 === 0) {
        document.getElementById('divideResult').textContent = "Cannot divide by zero";
    } else {
        document.getElementById('divideResult').textContent = `Result: ${(n1 / n2).toFixed(2)}`;
    }
}

function checkEvenOdd() {
    const num = parseInt(document.getElementById('evenOddInput').value);
    if (!isNaN(num)) {
        const res = num % 2 === 0 ? "Even" : "Odd";
        document.getElementById('evenOddResult').textContent = `Result: ${num} is ${res}`;
    } else {
        document.getElementById('evenOddResult').textContent = "Enter number";
    }
}

function showFormData() {
    const name = document.getElementById('formName').value || "Not provided";
    const email = document.getElementById('formEmail').value || "Not provided";
    document.getElementById('formData').innerHTML = `Name: ${name}<br>Email: ${email}`;
}

function countFields() {
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    let count = 0;
    if (name) count++;
    if (email) count++;
    document.getElementById('formCount').textContent = `Result: ${count} fields filled`;
}

function createPerson() {
    const name = document.getElementById('personName').value || "Unknown";
    const age = document.getElementById('personAge').value || "Unknown";
    const city = document.getElementById('personCity').value || "Unknown";
    const person = {name, age, city};
    document.getElementById('personResult').textContent = `Result: ${JSON.stringify(person)}`;
}

window.onload = function() {
    document.getElementById('reverseInput').value = "Hello World";
    document.getElementById('extractInput').value = "JavaScript";
    document.getElementById('longestInput').value = "Quick brown fox";
    document.getElementById('lowercaseInput').value = "HELLO";
    document.getElementById('uppercaseInput').value = "world";
    document.getElementById('wordsInput').value = "Hello, world!";
    document.getElementById('arrayInput').value = "5,10,15";
    document.getElementById('lastArrayInput').value = "apple,banana";
    document.getElementById('mapInput').value = "1,2,3";
    document.getElementById('spliceInput').value = "a,b,c,d";
    document.getElementById('spliceIndex').value = "1";
    document.getElementById('spliceCount').value = "2";
    createArray();
};
