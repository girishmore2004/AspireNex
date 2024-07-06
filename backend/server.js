require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // Change this to a different port number

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
