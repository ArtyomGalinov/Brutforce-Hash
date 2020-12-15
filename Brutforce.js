let fs = require('fs');
let arg = process.argv;
let result = new Array();
let text = fs.readFileSync('TheLittlePrince.txt');
text = text.toString();
let string = "prince";
for (let i = 0; i < text.length - string.length + 1; i++) {
    let flag = false;
    for (let j = 0; j < string.length; j++) {
        if (text[i + j] != string[j]) {
            flag = true;
            break;
        }
    }
    if (flag)
        continue;
    result.push(i);
}
console.log(result);



