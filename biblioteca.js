class Libro {
    #isbn;
    #disponible;

    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.#isbn = isbn;
        this.#disponible = true;
    }

    prestar() {
        if(!this.#disponible) {
            console.log(`El libro "${this.titulo}" no esta disponible.`);
            return false;
        }
        this.#disponible = false;
        return true;
    }

    devolver() {
        this.#disponible = true;
    }

    info() {
        return `${this.titulo} por ${this.autor} - ${this.#disponible ? "Disponible" : "No Disponible"}`;
    }

    get isbn() {
        return this.#isbn;
    }

    get disponible() {
        return this.#disponible;
    }
}

class LibroDigital extends Libro {
    constructor(titulo, autor, isbn, formato) {
        super(titulo, autor, isbn);
        this.formato = formato;
    }

    info() {
        return `${super.info()} - Formato: ${this.formato}`;
    }
}

class Usuario {
    #librosPrestados;

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.#librosPrestados = [];
    }

    prestarLibro(libro) {
        if(libro.prestar()) {
            this.#librosPrestados.push(libro);
            console.log(`${this.nombre} ha prestado "${libro.titulo}"`);
        }
    }

    devolverLibro(libro) {
        const index = this.#librosPrestados.indexOf(libro);
        if (index > -1) {
            libro.devolver();
            this.#librosPrestados.splice(index, 1);
            console.log(`${this.nombre} ha devuelto "${libro.titulo}" `);
        }
    }

    getLibrosPrestados (){
        return this.#librosPrestados;
    }
}

class Bibliotecario extends Usuario {
    static inventario = [];

    agregarLibro(libro) {
        Bibliotecario.inventario.push(libro);
        console.log(`Libro "${libro.titulo}" agregado al inventario. `);
    }

    eliminarLibro(isbn) {
        const index = Bibliotecario.inventario.findIndex(libro => libro.isbn === isbn);
        if(index > -1){
            console.log(`Libro "${Bibliotecario.inventario[index].titulo}" eliminado del inventario. `);
            Bibliotecario.inventario.splice(index, 1);
        }
    }

    static mostrarInventario() {
        console.log("=== Inventario de la Biblioteca ===");
        Bibliotecario.inventario.forEach(libro => console.log(libro.info()));
    }

    static buscarLibroPorTitulo(titulo) {
        return Bibliotecario.inventario.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    }
}

const libro1 = new Libro("1984", "George Orwell", "1234567890");
const libro2 = new Libro("El Principito", "Antoine de Saint-Exupéry", "0987654321", "epub")

const usuario1 = new Usuario("Starlight Glimmer", "starlglim@outlook.com");
const bibliotecario1 = new Bibliotecario("Ana", "ana@biblioteca.com");

bibliotecario1.agregarLibro(libro1);
bibliotecario1.agregarLibro(libro2);

Bibliotecario.mostrarInventario();

usuario1.prestarLibro(libro1);

console.log(libro1.info());
console.log(libro2.info());

const busqueda = Bibliotecario.buscarLibroPorTitulo("1984");
console.log("Busqueda por titulo: ", busqueda ? busqueda.info() : "No encontrado");

usuario1.devolverLibro(libro1);

Bibliotecario.mostrarInventario();