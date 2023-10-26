const express = require("express");
const controller = require("../controller/numeros");

const router = express.Router();

router.get("/", controller.obtenerNumeros);
router.post("/", controller.guardarNumero);
router.get("/promedio", controller.obtenerPromedio);
router.get("/minmax", controller.obtenerMinMax);
router.get("/cantidad", controller.obtenerCantidad);

module.exports = router;
