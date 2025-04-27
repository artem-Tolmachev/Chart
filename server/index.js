const express = require('express');
const ws = require('ws');
const cors = require('cors');

const events = require('events');
const axios = require('axios');

const emitter = new events.EventEmitter()
const PORT = 5000;

const app = express()
app.use(express.json())
app.use(cors())

let counter = 0;                                              
const BASE_URL = 'https://api.bybit.com/v5/market/kline?';
const TICKERS_URL = 'https://api.bybit.com/v5/market/tickers?category=linear';

app.get('/get-futures', async (req, res) => {
    try{
        const response = await axios.get(TICKERS_URL, {})
        res.json(response.data)
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
})

app.get('/artem-scriener', async (req, res) => {
    const requiredParams = ['category', 'symbol', 'interval', 'limit'];
    for(let param of requiredParams){
        if(!req.query[param]){
            return res.status(400).json({ error: `Missing query parameter: ${param}` });
        }
    }
    try{
        const response = await axios.get(BASE_URL, {
            params: {
                category: req.query.category,
                symbol: req.query.symbol,
                interval: req.query.interval,
                start: req.query.start,
                limit: req.query.limit
            }
        })
        res.json(response.data)
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
})
app.listen( PORT, (() => console.log(`сервер стартовал на http://localhost:${PORT}`)))

