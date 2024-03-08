// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// Route to serve the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Route to handle API requests for retrieving existing notes
app.get('/api/notes', (req, res) => {
  // Read notes from file and send as response
});

// Route to handle API requests for saving new notes
app.post('/api/notes', (req, res) => {
  // Read existing notes from file
  // Add new note to the list
  // Write updated notes to file
});

// Route to handle API requests for deleting notes
app.delete('/api/notes/:id', (req, res) => {
  // Read existing notes from file
  // Remove the note with the specified id
  // Write updated notes to file
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
