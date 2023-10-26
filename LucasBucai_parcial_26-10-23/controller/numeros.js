const service = require("../service/numeros");

const obtenerNumeros = (req, res) => {
  try {
    const numeros = service.obtenerNumeros();
    res.json({ numeros: numeros });
  } catch (error) {
    console.log("error al obtener numeros", error);
  }
};

const guardarNumero = (req, res) => {
  try {
    const body = req.body;
    const numeroGuardado = service.guardarNumero(body.numero);
    res.json({ numero: numeroGuardado });
  } catch (error) {
    console.log("error al guardar numero", error);
  }
};

const obtenerPromedio = (req, res) => {
  try {
    const promedio = service.obtenerPromedio();
    res.json({ promedio: promedio });
  } catch (error) {
    console.log("error al obtener promedio", error);
  }
};

const obtenerMinMax = (req, res) => {
  try {
    const minMax = service.obtenerMinMax();
    res.json(minMax);
  } catch (error) {
    console.log("error al obtener minmax", error);
  }
};

const obtenerCantidad = (req, res) => {
  try {
    const cantidad = service.obtenerCantidad();
    res.json({ cantidad: cantidad });
  } catch (error) {
    console.log("error al obtener cantidad", error);
  }
};

module.exports = {
  obtenerNumeros,
  guardarNumero,
  obtenerPromedio,
  obtenerMinMax,
  obtenerCantidad,
};
