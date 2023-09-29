const fs = require('fs')

console.log('PROGRAM START');

fs.readFile('package.json', 'utf-8', (errorRead, data) => {
    if (errorRead) {
        console.log('Error: ', errorRead.message);
    } else {
        let info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: fs.statSync('package.json').size
            }
        console.log(info)
            fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), errorWrite => {
            if (errorWrite) {
                console.log('Error: ', errorWrite.message);
            } else {
                console.log('CORRECT EXECUTION OF WRITE');
            }
            
        })
    }
    
})

console.log('PROGRAM CONTINUES EXECUTION ASYNCHRONOUSLY');

