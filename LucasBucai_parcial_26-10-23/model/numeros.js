const numeros = [];

const obtenerNumeros = () => {
  try {
    return numeros;
  } catch (error) {
    console.log("Error en obtener numeros:", error);
    return [];
  }
};

const guardarNumero = (numero) => {
  try {
    const n = Number(numero);
    numeros.push(n);
    return n;
  } catch (error) {
    console.log("Error en guardar numero:", error);
    return {};
  }
};

module.exports = {
  obtenerNumeros,
  guardarNumero,
};
