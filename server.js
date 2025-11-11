const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT ?? 3000;

// make all files in public available
app.use(express.static(path.join(__dirname, 'public')));

// home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.get('/spencer', (req, res) => {
  res.sendFile(path.join(__dirname, "src/big.html"));
});

app.get('/the', (req, res) => {
  res.sendFile(path.join(__dirname, "src/the.html"));
});

app.get('/splans', (req, res) => {
  res.sendFile(path.join(__dirname, "src/plans.html"));
});

app.get('/splans', (req, res) => {
  res.sendFile(path.join(__dirname, "src/plans.html"));
});

app.get('/sthoughts', (req, res) => {
  res.sendFile(path.join(__dirname, "src/thoughts.html"));
});

app.get('/sworks', (req, res) => {
  res.sendFile(path.join(__dirname, "src/works.html"));
});

app.get('/halloween', (req, res) => {
  res.sendFile(path.join(__dirname, "src/halloween.html"));
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

app.get('/alex', (req, res) => {
  res.sendFile(path.join(__dirname, "src/alex.html"));
});

app.get('/october', (req, res) => {
  res.sendFile(path.join(__dirname, "src/october.html"));
});


app.listen(port, () => {
  console.log(`I cannot tell a lie, Example app listening on port ${port}`);
});
