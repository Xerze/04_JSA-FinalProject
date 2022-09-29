// Importamos las rutas del módulo express.
import { router } from 'express';

/** Importamos los métodos (verbos) desde el archivo 'data.controller' (carpeta controllers)
 *      bajo el nombre book-controller
 * */
import { methods as bookController } from './../controllers/book-controller';

// Llamamos a Router (Importado desde express y lo asignamos a un objeto pora manipularlo).
const router = router();

// Usamos el objeto router para crear rutas para los verbos de la API.
// los métodos usan como parámetro una ruta y un handler (manejador).
router.get('/', bookController.getBooks);           // Traducción:  GET http://localhost:6000/api-restfull/books/
router.get('/:sku', bookController.getBook);        // Traducción:  GET http://localhost:6000/api-restfull/books/:sku
router.post('/', bookController.addBook);           // Traducción:  POST http://localhost:6000/api-restfull/books/
router.put('/:sku', bookController.updateBook);     // Traducción:  PUT http://localhost:6000/api-restfull/books/:sku
router.delete('/:sku', bookController.deleteBook);  // Traducción:  DELETE http://localhost:6000/api-restfull/books/:sku

// Exportamos las rutas para poder usarlas en otras partes del proyecto.
export default router;