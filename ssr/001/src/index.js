import express from 'express';
import React from 'react';
import reactDOM from 'react-dom/server';
import Home from './client/home';

const app = express();

app.get('/', (req, res) => {
    const content = reactDOM.renderToString(<Home />);
    res.send(content);
});

app.listen('3002', () => {
    console.log('listening on port 3002')
});