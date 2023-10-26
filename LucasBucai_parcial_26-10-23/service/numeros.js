const model = require("../model/numeros");

const obtenerNumeros = () => {
  const numeros = model.obtenerNumeros();
  return numeros;
};

const guardarNumero = (numero) => {
  const numeroGuardado = model.guardarNumero(numero);
  return numeroGuardado;
};

const obtenerPromedio = () => {
  const numeros = model.obtenerNumeros();
  const cantidad = obtenerCantidad();
  const suma = numeros.reduce((a, b) => a + b, 0);
  const promedio = suma / cantidad;
  return promedio;
};

const obtenerMinMax = () => {
  const numeros = model.obtenerNumeros();
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  return { max: max, min: min };
};

const obtenerCantidad = () => {
  const numeros = model.obtenerNumeros();
  return numeros.length;
};

module.exports = {
  obtenerNumeros,
  guardarNumero,
  obtenerPromedio,
  obtenerMinMax,
  obtenerCantidad,
};
