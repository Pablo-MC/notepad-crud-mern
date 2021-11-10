import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes';

import { connectDB } from './database';

const app = express();

// Connect DataBase
connectDB();

// Middlewares
app.use(cors()); // Permite enviar y recibir datos entre el Servidor y el Cliente.
app.use(morgan('dev')); // Permite ver en la terminal las solicitudes que llegan desde el Cliente.
app.use(express.json()); // Permite al servidor interpretar los formatos json que llegan desde el Cliente (req.body).

// Routes
app.use('/api/auth', authRoutes);

// app.get('/api/user', (req, res) => res.send('Users route'));

// Port
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});