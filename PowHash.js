let fs = require('fs');
let arg = process.argv;
let result = new Array();
let text = fs.readFileSync('TheLittlePrince.txt');
text = text.toString();
let string = "prince";
let stringHash = 0;
let textHash = 0;
result = new Array;
for (let i = 0; i < string.length; i++) {
    stringHash += Math.pow(string.charCodeAt(i), 2);
    textHash += Math.pow(text.charCodeAt(i), 2);
}
for (let j = string.length; j < text.length; j++) {
    textHash = textHash - Math.pow(text.charCodeAt(j - string.length), 2) + Math.pow(text.charCodeAt(j), 2);
    if (stringHash == textHash) {
        flag = false;
        for (let i = 0; i < string.length; i++) {
            if (text[j - string.length + 1 + i] != string[i]) {
                flag = true;
                break;
            }
        }
        if (!flag) result.push(j - string.length + 1);
    }
}
console.log(result);
