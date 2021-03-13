const writeFunc = (str) => process.stdout.write('Result:' + str + '\n\n');

const dataHandler = (data) => writeFunc(data.toString().split('').reverse().join(''));

process.stdin.on('data', dataHandler);