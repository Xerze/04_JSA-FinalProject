// EN COMMONS USAMOS INFORMACIÓN COMÚN DEL PROYECTO.
// En connections.js hacemos las conexiones con la base de datos.

// Importamos el módulo promise-mysql (base de datos).
import mysql from 'promise-mysql';
// Importamos el módulo en donde manejamos toda la información de la base de datos y la usamos como config.
import config from './constants';

/** Creamos la conexión entre mysql y la base de datos e inyectamos la info directo
 *      de la configuración setteada en constants.js.
 *      Usamos los módulos de config para instanciarlos en los atributos de connection.
 * */
const connection = mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD
});

// Obtenemos la conexión desde una arrow function.
const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}