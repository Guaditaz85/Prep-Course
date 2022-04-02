// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debew tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(usuario, nombre, email, password) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
  Usuario.prototype.saludar = function () {
    return "Hola, mi nombre es " + this.nombre;
  };

  const guada = new Usuario("Guada85", "Guada", "guadasar@hotmail.com", "1234");
  console.log(guada.saludar());
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  function Constructor() {}
  Constructor.prototype.saludar = function () {
    return "Hello World!";
  };
  console.log(saludar());
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  function String(name, reverse) {
    this.name = name;
    this.reverse = reverse;
  }
  String.prototype.reverse = function () {
    return this.reverse;
  };
  const guada = new String("guada", "adaug");
  console.log(guada.reverse());
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: {
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona {
  constructor(
    /*Escribir los argumentos que recibe el constructor*/ nombre,
    apellido,
    edad,
    domicilio
  ) {
    // Crea el constructor:
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }
}
Persona.prototype.detalle = function () {
  return Persona;
};
const mora = new Persona("Mora", "Sainte", "8", "Gorriti 581");
console.log(mora);

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  crearInstanciaPersona.prototype = Object.create(Persona.prototype);
  crearInstanciaPersona.prototype.constructor = crearInstanciaPersona;
}
const nuevo = new crearInstanciaPersona("Juan", "Pérez", "32", "Saavedra 123");
console.log(nuevo);

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      this.datos = function () {
        return this.nombre + ", " + this.edad + " años";
      };
    }
  }
  const mora = new Persona("Mora", "8");
  console.log(mora.datos());
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
};
