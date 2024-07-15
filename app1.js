const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const voteRoutes = require('./routes/votes');  // Import vote routes correctly

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://gaurikolar:KsVrbCvYWFSoTvMe@cluster0.pkoiw4n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', voteRoutes);  // Ensure this is correct

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));