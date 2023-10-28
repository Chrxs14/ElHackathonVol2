const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const allowedOrigins = ['http://localhost:8080'];

const options = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed'));
    }
  },
};

app.use(cors(options));

app.get('/home', (req, res) => {
  res.json('Home');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});