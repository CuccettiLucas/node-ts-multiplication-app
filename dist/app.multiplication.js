"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiple = 5;
let output = "";
const header = `
===========================
        Tabla del 5
===========================\n
`;
/*
const response = numbers.map((n)=> (
    `${multiple} x ${n} = ${multiple * n}`
));
*/
for (let i = 0; i <= 10; i++) {
    output += `${multiple} x ${i} = ${multiple * i}\n`;
}
output = header + output;
console.log(output);
const outputPath = `outputs/f1/f2/f3/f4`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${multiple}.txt`, output);
console.log('File created!!');
