// These lines makes "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

require('dotenv').config();
import routes from './routes/index.js';

const express = require('express');
const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});