const fs = require('fs')

console.log('PROGRAM START');

try {

const read = fs.readFileSync('package.json', 'utf-8')

let info = {
    contenidoStr: read,
    contenidoObj: JSON.parse(read),
    size: fs.statSync('package.json').size
    }

const write = fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'))

console.log(info);

console.log('CORRECT EXECUTION OF WRITE');
} catch(e) {
    console.log('Error', e.message);
}

