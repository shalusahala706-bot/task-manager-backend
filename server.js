import express from 'express';
import cors from 'cors';
import router from './Router/router.js';
import connectDb from './config/db.js';

const app = express();
app.use(express.json());
app.use(cors());

connectDb();

app.use('/', router);

app.listen(3000, () =>  {
  console.log('Server is running http://localhost:3000');
})