import express from 'express';

const app = express();

app.use(express.json());
app.use(require('./routes/index'));
app.get("/category", (req, res) => {
  console.log("aqui")
  return res.json();
});

app.listen(4000, () => console.log("Up!"));


