import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugins";

console.log(yarg);
const {b:base, l:limit, s:showTable} = yarg;
let output:string = "";

const header = `
===========================
        Tabla del ${base}
===========================\n
`
/*
const response = numbers.map((n)=> (
    `${base} x ${n} = ${base * n}`
));
*/

for (let i = 0; i <= limit; i++) {
    output += `${base} x ${i} = ${base * i}\n`   
}
output = header + output;
showTable&&console.log(output);

const outputPath = `outputs/`;

fs.mkdirSync(outputPath, {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,output);
console.log('File created!!');
