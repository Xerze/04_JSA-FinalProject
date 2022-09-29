// Importamos desde 'servidor.js' (donde administramos el puerto y la info del servidor).
import servidor from "./server";

// Mostramos en la consola que se está ejecutando y el puerto asignado (en servidor.js)
const main = () => {
    // Obten y escucha el puerto al que estás asignado.
    servidor.listen(servidor.get('port'));
    console.log(`Server on port: ${servidor.get('port')}`);
};

main();