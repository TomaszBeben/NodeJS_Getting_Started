// const express = require('express');
import express from 'express'

const server = express();

server.get('/', (req, res) => {
  res.send('elo express')
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
