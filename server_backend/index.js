const express = require('express');
//Importamos el modulo routes
const routerApi = require('./routes');
//Creamos el punto de servicio webApi
const app = express();
app.use(express.json());
//Permitimos el intercambio de recursos de un servidor web
const cors = require('cors');
app.use(cors());
//Creamos el servidor – no puede estar en el puerto 3000 pues ese usará React en el entorno local
const port = 3001;
app.listen(port, ()=> {console.log("connect to server 3001");});
//Llamamos la router Api y le pasamos la webApi
routerApi(app);
