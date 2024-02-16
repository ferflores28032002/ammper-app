// Función para generar colores aleatorios en formato hexadecimal
export function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
