// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./Routers/todoRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

async function startServer() {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server", error);
  }
}

startServer();