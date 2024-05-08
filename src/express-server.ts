import http from 'http';
const express = require('express');
const indexRouter = require('./routes/root');
const app = express();
import { AppDataSource } from './utils/db/connection';
export default async () => {
    await AppDataSource.initialize();
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({limit: '50mb', extended: false}));
    app.use('/', indexRouter);
    
  return http.createServer(app);

};