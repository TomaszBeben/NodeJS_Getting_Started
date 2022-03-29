// const express = require('express');
import express from 'express'

const server = express();

server.listen(4242, () => {
  console.log('Express Server is running...');
});
