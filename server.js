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

app.get('/james', (req, res) => {
  res.sendFile(path.join(__dirname, "src/james.html"));
});

app.get('/brady', (req, res) => {
  res.sendFile(path.join(__dirname, "src/brady.html"));
});

app.get('/jolly', (req, res) => {
  res.sendFile(path.join(__dirname, "src/jolly.html"));
});

app.get('/bradythoughts', (req, res) => {
  res.sendFile(path.join(__dirname, "src/bradythoughts.html"));
});

app.get('/bradyworks', (req, res) => {
  res.sendFile(path.join(__dirname, "src/bradyworks.html"));
});

app.get('/eric', (req, res) => {
  res.sendFile(path.join(__dirname, "src/eric.html"));
});

app.get('/alex', (req, res) => {
  res.sendFile(path.join(__dirname, "src/alex.html"));
});


app.listen(port, () => {
  console.log(`I cannot tell a lie, Example app listening on port ${port}`);
});
