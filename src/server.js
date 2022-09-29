/** Importamos los módulos de express y morgan, que son middewares.
 *      Morgan es un administrador de recursos que permite que nuestro protocolo sea http.
 *      Nos permite hacer la solicitud de la información y devuelve el status con más información.
*/
import express from 'express';
import morgan from 'morgan';

// Importamos book-routes para poder usarlas en el levantamiento del servidor.
import bookRoutes from './routes/book-routes';

// Creamos una instancia del framework express para usar la configuración en el servidor.
const servidor = express();

// Le decimos a express (guardado en servidor) que nos inicialice el puerto.
servidor.set('port', 6000);

servidor.use(morgan('dev'));
servidor.use(express.json());

/** Le decimos a la app que cuando la url sea la dada en el primer parámetro use bookRoutes,
 *      la cual va a ser nuestra ruta de recurso antes de llegar a los endpoints
 * */
servidor.use('/api-restfull/books', bookRoutes);

// Exportamos 'servidor' para usarlo en otros archivos del proyecto (index, principalmente).
export default servidor;
