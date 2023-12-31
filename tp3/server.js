const express = require('express')
const routerLibros = require('./router/libros')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use('/api/libros', routerLibros)
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto: ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))