import express from 'express';

const app = express();

const cors = require('cors')

app.use(cors())

app.get('/products/:id', function (req: any, res: { json: (arg: { msg: string; }) => void; }, next: any) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})

app.use(express.json());
app.use(require('./routes/index'));
app.get("/category", (req, res) => {
  console.log("aqui")
  return res.json();
});




