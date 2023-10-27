const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplcar'.green
            })
            .option('m',{
                alias: 'maximo',
                type: 'number',
                demandOption: true,
                describe: 'Es hasta donde va la tabla de multiplcar'.blue
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Imprime en consola la tabla requerida'.cyan
            })
            .check((argv, options)=> {
                if(isNaN(argv.b || argv.m)){
                    throw 'La base tiene que ser un número y el máximó tienen que ser un número, l boleano';
                }
                return true;
            })
            .argv;

module.exports = argv;