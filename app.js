import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { todosRoutes } from './routes/todosRoutes.js';
import { mongoDB } from './models/configDB.js';


const app = express();
const PORT = process.env.PORT || 5_000; // prod | dev

// DB connection
mongoose.connect(mongoDB.uri, {
  dbName: 'todosDB',
  user: mongoDB.user,
  pass: mongoDB.password,
})
  .then((db) => {
    console.log('[DB⚡] connected to', db.connection.name);
  })
  .catch((error) => {
    console.log(error.message);
  });

// midlewares
app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use('/api/v1/todos', todosRoutes);

// app inits
app.listen(PORT, () => {
  console.log(`[Server⚡] running on port: ${PORT}`);
});
