// These lines makes "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import bodyParser from 'body-parser';
import cors from 'cors';
import 'express-async-errors';
import moment from 'moment';
require('dotenv').config();
require('log-timestamp')(() => `[${moment().utcOffset('-03:00').format('YYYY-MM-DD HH:mm:ss A')}]`);
import routes from './routes/index.js';

const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  methods: 'POST, GET, PUT, DELETE, PATCH, HEAD, OPTIONS',
  origin: true
}));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});