const express = require("express");

const routerNumeros = require("./router/numeros");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/numeros", routerNumeros);

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en el puerto: ${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
