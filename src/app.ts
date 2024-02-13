import express from 'express';
import dotenv from 'dotenv';
import { Signale } from "signale";
import morgan from 'morgan';

import { userManagementRouter } from './user-management/infrastructure/routes/user.router';

const app = express();
const signale = new Signale();

dotenv.config();
app.use(morgan('dev'));
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/user', userManagementRouter);

async function startServer() {app.listen(PORT,() => {
        signale.success(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

startServer();
