import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes';
import logger from './helpers/logger';
import { sequelize } from './models';
import 'dotenv/config';
import dotenv from "dotenv";
dotenv.config();


const app: Express = express();
const port = process.env.PORT;

process.env.TZ = 'Etc/UTC';

if (!process.env.PORT) {
    throw new Error('PORT environment variable is not defined');
}

//database connection and sync tables
sequelize.sync({ alter: process.env.NODE_ENV === 'development' ? true : false })
    .then(() => { logger.info("Database connected! Drop and re-sync db.") })
    .catch((e) => { logger.error(e) })

//deployment optimization
app.use(
    compression({
        level: 6,
        threshold: 100 * 1000,
        filter: (req, res) => {
            if (req.headers['x-no-compression']) return false;
            return compression.filter(req, res);
        },
    })
);

//builtin middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

//routes
app.use(routes);

//running server
app.listen(port, () => {
    logger.info(`⚡️ Server is running at http://localhost:${port}`);
});

