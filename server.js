const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// make all files in public available
app.use(express.static(path.join(__dirname, 'public')));

// home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.get('/spencer', (req, res) => {
  res.sendFile(path.join(__dirname, "src/spencer.html"));
});

app.get('/mobile', (req, res) => {
  res.sendFile(path.join(__dirname, "src/mobile.html"));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
