import express from "express";

const app = express();
const PORT = process.env.PORT || 5_000; // prod | dev

app.get("/", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      message: "hello world aliebnb",
      student: "César Rivera",
    },
  });
});

app.listen(PORT, () => {
  console.log(`[Server⚡] running on port: ${PORT}`);
});
