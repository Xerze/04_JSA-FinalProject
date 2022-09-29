// importamos la conexión dada en el archivo connections.
import {getConnection} from './../commons/connections';

/** ------------- FUNCIONES -------------
 *  Las siguientes  constantes guardan todas funciones asíncronas donde declaramos
 *      el comportamiento de los métodos usados en book-routes.js. En todas se hace la solicitud.
 *      1) Si todo sale bien (try), guarda la conexión y el resultado de la petición.
 *      Después hace todos las acciones correspondientes e imprime la respuesta (json).
 *      2) Si hay un error (catch), se imprime el status y el mensaje de error.
*/

// GET: Obtener toda la base de datos.
const getBooks = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM books');
        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(error.message);
    };
};

// GET: Obtener un elemento de acuerdo a su id.
const getBook = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM books WHERE id = ?', id);
        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    };
};

// POST: Agregar un libro nuevo con todos sus atributos.
const addBook = async (req, res) => {
    try {
        const {id, title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        
        if (id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined) {
            res.status(400).json({message: 'Bad request. Please fill all fields.'});
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO `books`(`id`, `title`, `total_pages`, `author`, `nationality`, `language`, `cover_url`, `editorial`) VALUES (?,?,?,?,?,?,?,?)', [id, title, total_pages, author, nationality, language, cover_url, editorial]);
        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    };
};

// PUT: Modificar un libro existente.
const updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        
        if (title === undefined || author === undefined || cover_url === undefined || editorial === undefined) {
            res.status(400).json({message: 'Bad request. Please fill all fields.'});
        }

        const connection = await getConnection();
        const result = await connection.query('UPDATE books SET `title`=?, `total_pages`=?, `author`=?, `nationality`=?, `language`=?, `cover_url`=?, `editorial`=? WHERE id=?', [title, total_pages, author, nationality, language, cover_url, editorial, id]);
        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    };
};

// DELETE: Obtener un elemento de acuerdo a su id.
const deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM books WHERE id=?', id);
        res.json(result);
    } catch(err) {
        res.status(500);
        res.send(err.message);
    };
};

export const methods = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}