const libros = [
  { id: "1", nombre: "Moby Dick", precio: 123, stock: 12 },
  { id: "2", nombre: "Caperucita roja", precio: 456, stock: 34 },
  { id: "3", nombre: "Habitos atomicos", precio: 789, stock: 56 },
];

const obtenerLibros = (id) => {
  if (id) {
    const libro = libros.find((libro) => libro.id === id);
    return libro || {};
  }
  return libros;
};

const guardarLibro = (libro) => {
  libro.id = String(libros.length + 1);
  libro.nombre = String(libro.nombre);
  libro.precio = Number(libro.precio);
  libro.stock = Number(libro.stock);
  libros.push(libro);
  return libro;
};

const actualizarLibro = (id, libro) => {
  const index = libros.findIndex((l) => l.id === id);
  if (index != -1) {
    const libroAnt = libros[index];
    const libroNuevo = { ...libroAnt, ...libro };
    libros.splice(index, 1, libroNuevo);
    return libroNuevo;
  } else {
    return guardarLibro(libro);
  }
};

const borrarLibro = (id) => {
  let libroEliminado = {};
  const index = libros.findIndex((libro) => libro.id === id);
  if (index != -1) {
    libroEliminado = libros.splice(index, 1)[0];
  }
  return libroEliminado;
};

module.exports = {
  obtenerLibros,
  guardarLibro,
  actualizarLibro,
  borrarLibro,
};
