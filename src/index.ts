import express from 'express';

const app = express();

const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(require('./routes/index'));

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})





