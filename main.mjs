import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = createInterface({ input, output });

const personas = [];
let sumaNotas = 0;

while (true) {
  //Punto 1
  const nombre = await rl.question(`Ingrese su nombre\n`);

  let edad = 0;
  while (true) {
    const edadRespuesta = await rl.question(`Ingrese su edad\n`);
    const e = parseInt(edadRespuesta);

    if (e > 0) {
      edad = e;
      break;
    }
    console.log("Edad inválida");
  }
  let nota = 0;

  while (true) {
    const notaRespuesta = await rl.question(`Ingrese su nota\n`);
    const n = parseFloat(notaRespuesta);

    if (n >= 0 && n <= 10) {
      nota = n;
      break; // Sale del bucle inmediatamente
    }
    console.log("Nota inválida");
  }
  sumaNotas += nota;

  personas.push([nombre, edad, nota]);

  const seguir = await rl.question(`Finalizar(Si/No)`);

  if (seguir.trim().toUpperCase() === "SI") {
    break;
  }
}

//Punto 2
const personasOrdenadas = [...personas].sort((a, b) => b[2] - a[2]);

const promedioNotas = sumaNotas / personas.length;

//Punto 3
//Salida
console.clear();
console.log(`Personas:`);
console.table(personas);
console.log(`Personas ordenadas de mayor a menor:`);
console.table(personasOrdenadas);
console.log(`Promedio de notas general: ${promedioNotas}`);

rl.close();
