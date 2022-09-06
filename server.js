require('dotenv').config();
import routes from './routes';

const express = require('express');
const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});