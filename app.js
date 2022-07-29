import express from 'express';


const app = express();
const PORT = process.env.PORT || 5_000; // prod | dev

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'sucess',
    data: {
      posts: [],
      user: 'npm updated',
    },
  });
});

app.listen(PORT, () => {
  console.log(`[Server⚡] running on port: ${PORT}`);
});
