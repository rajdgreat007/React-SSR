const express = require('express');
const React = require('react');
const reactDOM = require('react-dom/server');
const Home = require('./client/home').default;

const app = express();

app.get('/', (req, res) => {
    const content = reactDOM.renderToString(<Home />);
    res.send(content);
});

app.listen('3002', () => {
    console.log('listening on port 3002')
});