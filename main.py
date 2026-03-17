personas = []
suma_notas = 0

while True:
    nombre = input("Ingrese nombre: ")

    while True:
        edad = int(input("Ingrese edad: "))
        if edad > 0:
            break
        print("Edad invalida")

    while True:
        nota = float(input("Ingrese nota: "))
        if 0 <= nota <= 10:
            break
        print("Nota invalida")

    suma_notas += nota

    personas.append([nombre, edad, nota])

    seguir = input("Finalizar (SI/NO): ")
    if seguir.upper() == "SI":
        break


print("\nLista original:")
for p in personas:
    print(p)

# ordenar usando sort
personas_ordenadas = personas.copy()
personas_ordenadas.sort(key=lambda x: x[2], reverse=True)

print("\nLista ordenada por nota:")
for p in personas_ordenadas:
    print(p)

promedio = suma_notas / len(personas)

print("\nPromedio general:", promedio)