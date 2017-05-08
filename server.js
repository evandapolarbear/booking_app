const express = require('express');
const app = require('./app')

app.listen(3000, () => {
  console.log("Server Up");
});

// app.get('/' (req, res) => {})
