import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = createInterface({ input, output });

const cantidadPersonas = await rl.question("¿Cuantás personas van a ser ingresados?");

console.log(cantidadPersonas)

const personas = []

let contador = 0

while ( contador < cantidadPersonas ){
    const nombre = await rl.question("Ingrese su nombre")
    
    const edadRespuesta = await rl.question("Ingrese su edad")
    
    const edad = parseInt(edadRespuesta)

    const notaRespuesta = await rl.question("Ingrese su nota")
    
    const nota = parseFloat(notaRespuesta)

    personas.push([nombre, edad, nota])
    contador += 1
}

console.table(personas)

rl.close()