const fs = require('fs');


const crearArchivo = async(b = 4, m = 10, l = false )=>{

    console.log(b , m , l)
    try{

        let salida = '';
         for( let i = 0; i <= m ; i++){
            salida+= `${b} X  ${i} = ${i*b}\n`;
        }

        if (l === true){

            console.log('========================================='.red);
            console.log('        TABLA DE MULTIPLICAR DEL'.blue, b);
            console.log('========================================='.red);
            console.log(salida.cyan);
        }
        fs.writeFileSync(`./salida/tabla-${b}-hasta-el-${m}.txt`, salida);
        return `tabla-${b}-hasta-el-${m}.txt`;
    }catch(error){throw error}      
}
module.exports = {crearArchivo}