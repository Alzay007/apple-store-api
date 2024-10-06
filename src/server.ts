import dotenv from 'dotenv';
import connectDB from './db.js';
import { createServer } from './createServer.js';

dotenv.config();

connectDB();

const port = process.env.PORT || 3000;

createServer().listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
