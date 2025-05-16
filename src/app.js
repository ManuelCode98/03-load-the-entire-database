import express from 'express';
import cors  from 'cors';
import { routes } from './routes/routes.js';

const app = express();

app.use( cors() )
app.use( express.json() );

// Rutas
app.use( '/api', routes );


export {
    app,
}

