// server.js
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/Posts.Myntra posts'; // Change to your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const db =mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const myntraPostSchema = new mongoose.Schema({
  name: String,
  timesince: String,
  post: String, // Assuming post picture stored as a URL or filename
});

const MyntraPost = mongoose.model('MyntraPost', myntraPostSchema, 'Myntra posts');

// API endpoint to fetch users
app.get('/api/myntra-posts', async (req, res) => {
  try {
    const posts = await MyntraPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

