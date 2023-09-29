const fs = require('fs').promises

console.log('PROGRAM START');

async function readWriteFsAsync() {
    try {

        const read = await fs.readFile('package.json', 'utf-8')
        
        let info = {
            contenidoStr: read,
            contenidoObj: JSON.parse(read),
            size: (await fs.stat('package.json')).size
            }
        
        const write = await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'))
        
        console.log(info);
        
        console.log('CORRECT EXECUTION OF WRITE');
        } catch(e) {
            console.log('Error', e.message);
        }
}

readWriteFsAsync()