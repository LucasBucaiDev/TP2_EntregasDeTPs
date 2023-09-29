const fs = require('fs').promises;

console.log('PROGRAM START');

fs.readFile('package.json', 'utf-8')
  .then((data) => {
    const info = {
      contenidoStr: data,
      contenidoObj: JSON.parse(data),
      size: fs.stat('package.json').size,
    };

    return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'))
      .then(() => {
        console.log(info);
        console.log('CORRECT EXECUTION OF WRITE');
      });
  })
  .catch((err) => {
    console.error('Error:', err.message);
  });