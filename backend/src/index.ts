import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/index";
import usersRoutes from "./routes/usersRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/users", usersRoutes);

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`🚀 Server started on ${port}`);
});