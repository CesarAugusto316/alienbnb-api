import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { postRoutes } from './routes/postsRoutes.js';
import { mongoDB } from './models/configDB.js';


const app = express();
const PORT = process.env.PORT || 5_000; // prod | dev

// DB connection
mongoose.connect('mongodb+srv://cesar:AhLueBvIUYDw3IQ3@larnu-bootcamp-01.55ojh.mongodb.net/?retryWrites=true&w=majority')
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
app.use('/api/v1/posts', postRoutes);

// app inits
app.listen(PORT, () => {
  console.log(`[Server⚡] running on port: ${PORT}`);
});
