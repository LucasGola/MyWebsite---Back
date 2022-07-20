import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';
import moment from 'moment';
import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './swagger.json';
import helmet from 'helmet';

require('dotenv').config();
require('log-timestamp')(() => `[${moment().utcOffset('-03:00').format('YYYY-MM-DD HH:mm:ss A')}]`);

const express = require('express');
const app = express()

app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  methods: 'POST, GET, DELETE, PATCH',
  origin: true,
}));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use(helmet());

app.get('/', (req, res) => {
    res.send('it works');
});

app.listen(process.env.PORT || 3009, () => {
    console.log(`Connected to ${process.env.PORT || 3009}`);
});
