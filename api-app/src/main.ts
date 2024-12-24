import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4202;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/sachin', (req, res) => {
  res.send({ message: 'Hello Sachin Tiwari' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
