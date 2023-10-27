
const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

console.log(argv.b, argv.m, argv.l)
crearArchivo(argv.b, argv.m,argv.l)  
    .then( nombreArchivo => console.log(nombreArchivo,'Creado'.rainbow))
    .catch(err=> console.log(err));

//ASI NOOOOOOOOOOOOOOOOO
// const [, , arg3 = 'base=5', arg4 = 'limite=10']  = process.argv;
// const [,base = 5] = arg3.split('=');
// const [,limite = 10] = arg4.split('=');

    



