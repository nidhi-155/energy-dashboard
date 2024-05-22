const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const getUserData = require('./random-energy');

// Enable CORS for all routes
app.use(cors());

app.get('/energy/week/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = getUserData(userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

app.get('/energy/month/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = getUserData(userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

app.get('/energy/year/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = getUserData(userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});