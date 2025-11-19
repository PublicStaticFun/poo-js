# Sistema de Gestión de Librería Digital en JavaScript

Este proyecto es un **ejemplo avanzado de Programación Orientada a Objetos (POO) en JavaScript**, que simula la gestión de libros y usuarios en una librería digital. Está diseñado para demostrar conceptos como **herencia, encapsulación, polimorfismo y métodos estáticos**.

## Conceptos de POO aplicados

1. **Encapsulación**
   - Las propiedades privadas (`#isbn`, `#librosPrestados`) sólo pueden ser accedidas mediante **getters y setters**.
   - Esto protege los datos y evita modificaciones directas desde fuera de la clase.

2. **Herencia**
   - La clase `Bibliotecario` hereda de `Usuario`, por lo que comparte sus propiedades y métodos, pero añade funcionalidades propias.

3. **Polimorfismo**
   - La clase `LibroDigital` sobrescribe el método `info()` de `Libro` para mostrar información adicional (`formato`).

4. **Métodos y propiedades estáticas**
   - `Bibliotecario.inventario` almacena todos los libros de la librería de forma global.
   - Métodos estáticos como `mostrarInventario()` y `buscarLibroPorTitulo()` permiten operar sobre la clase directamente, sin instancias.

## Clases utilizadas

### 1. `Libro`
Representa un libro físico en la librería.

**Propiedades:**
- `titulo` (string)
- `autor` (string)
- `#isbn` (privado)
- `#disponible` (booleano, por defecto `true`)

**Métodos:**
- `prestar()` → Marca el libro como no disponible.
- `devolver()` → Marca el libro como disponible.
- `info()` → Devuelve un string con título, autor y disponibilidad.
- Getters para `isbn` y `disponible`.


### 2. `LibroDigital` (hereda de `Libro`)
Representa un libro en formato digital.

**Propiedades adicionales:**
- `formato` (string: pdf, epub, mobi)

**Polimorfismo:**
- Sobrescribe `info()` para incluir el formato del libro digital.


### 3. `Usuario`
Representa a un usuario de la librería.

**Propiedades:**
- `nombre` (string)
- `email` (string)
- `#librosPrestados` (array privado)

**Métodos:**
- `prestarLibro(libro)` → Presta un libro y lo agrega a `librosPrestados` si está disponible.
- `devolverLibro(libro)` → Devuelve un libro y lo elimina de `librosPrestados`.
- Getter para `librosPrestados`.


### 4. `Bibliotecario` (hereda de `Usuario`)
Usuario con permisos especiales para gestionar el inventario.

**Propiedades adicionales:**
- `inventario` (array estático) → almacena todos los libros de la librería.

**Métodos adicionales:**
- `agregarLibro(libro)` → Añade un libro al inventario.
- `eliminarLibro(isbn)` → Elimina un libro del inventario por su ISBN.

**Métodos estáticos:**
- `mostrarInventario()` → Muestra todos los libros con su disponibilidad.
- `buscarLibroPorTitulo(titulo)` → Busca un libro en el inventario por título.

---
