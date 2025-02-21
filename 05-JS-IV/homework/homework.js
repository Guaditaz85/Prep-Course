// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const gato = {
    nombre: "nombre",
    edad: "edad",
    meow: function () {
      console.log("Meow!");
    },
  };
  gato.meow();
  console.log(gato);
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  const argumento = {
    objeto: "null",
  };
  const propiedad = {};
  propiedad.objeto = "property";
  console.log(argumento);
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  const objeto = {
    metodo: function () {
      console.log("Returned");
    },
  };
  objeto.metodo();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  objetoMisterioso = {
    numeroMisterioso: 3,
  };
  objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  const eliminar = {
    unaPropiedad: "objeto",
  };
  delete eliminar[unaPropiedad];
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const user = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "1234",
  };
  console.log(user);
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  const user = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "1234",
  };
  for (let email in user) {
    if (email !== null || undefined) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  const objeto = {
    propiedad: "propiedad",
  };
  for (let propiedad in objeto) {
    if (propiedad === "propiedad") {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  const user = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "1234",
  };
  for (let password in user) {
    if ("password" === password) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  const user = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "1234",
  };
  user.password = "7890";
  console.log(user);
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  const usuario = {
    amigos: ["Juan", "Pedro", "María", "Inés"],
  };
  usuario.amigos.push("nuevoAmigo");
  console.log(usuario);
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  const usuario = {
    usuarios: ["Juan", "Pedro", "María"],
    esPremium: "true",
  };
  console.log(usuario.usuarios);
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  const usuario = {
    posts: [
      (post = {
        likes: 3,
      }),
      (post = {
        likes: 4,
      }),
    ],
  };
  for (let i = 0; i < usuario.length; i++) {
    const suma = suma + i;
    console.log(suma);
  }
}
function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  const producto = {
    precio: 80,
    porcentajeDescuento: 0.2,
    calcularPrecioDescuento: function () {
      const descuento =
        producto.precio - producto.precio * producto.porcentajeDescuento;
      console.log(descuento);
    },
  };
  producto.calcularPrecioDescuento();
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
