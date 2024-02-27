const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social-network-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error:'));

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
