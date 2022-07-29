import express from 'express';
import mongoose from 'mongoose';
import { postRoutes } from './routes/postsRoutes.js';
import { mongoDB } from './models/configDB.js';


const app = express();
const PORT = process.env.PORT || 5_000; // prod | dev

// DB connection
mongoose.connect(mongoDB.uri, {
  dbName: 'postsDB',
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
app.use(express.json());
app.use('/api/v1/posts', postRoutes);

// app inits
app.listen(PORT, () => {
  console.log(`[Server⚡] running on port: ${PORT}`);
});
