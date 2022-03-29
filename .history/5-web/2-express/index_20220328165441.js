// const express = require('express');
import express from 'express'

const server = express();

server.get('/', (req, res) => {
  res.send('elo express')
})
server.get('/about', (req, res) => {
  res.send('About')
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
