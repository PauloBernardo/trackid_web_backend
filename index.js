const axios = require('axios')
const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.get('/get', async (req, res) => {
    // console.log(req.headers.authorization);
    try {
        const response = await axios.get(req.query.route, {
            headers: {
                Authorization: req.headers.authorization,
            },
            params: req.query
        })
        res.json(response.data);
    } catch (e) {
        console.log('GET - error -> ', req.query.route,)
        console.log('GET -> status', e.response.status, ' message ->', e.response.data)
        res.status(e.response.status);
        res.json(e.response.data);
    }
})

app.post('/post', async (req, res) => {
    console.log({...req.body, route: undefined });
    try {
        const response = await axios.post(req.body.route, {...req.body, route: undefined }, {
            headers: {
                Authorization: req.headers.authorization,
            },
            params: req.query,
        })
        res.status(response.status);
        res.json(response.data);
    } catch (e) {
        console.log('POST - error -> ', req.body.route,)
        console.log('POST -> status', e.response.status, ' message ->', e.response.data)
        res.status(e.response.status);
        res.json(e.response.data);
    }
})

app.patch('/patch', async (req, res) => {
    // console.log(req);
    try {
        const response = await axios.patch(req.body.route, {...req.body, route: undefined }, {
            headers: {
                Authorization: req.headers.authorization,
            }
        })
        res.status(response.status);
        res.json(response.data);
    } catch (e) {
        console.log('PATCH - error -> ', req.body.route,)
        console.log('PATCH -> status', e.response.status, ' message ->', e.response.data)
        res.status(e.response.status);
        res.json(e.response.data);
    }
})

app.put('/put', async (req, res) => {
    // console.log(req);
    try {
        const response = await axios.patch(req.body.route, {...req.body, route: undefined }, {
            headers: {
                Authorization: req.headers.authorization,
            }
        })
        res.status(response.status);
        res.json(response.data);
    } catch (e) {
        console.log('PUT - error -> ', req.body.route,)
        console.log('PUT -> status', e.response.status, ' message ->', e.response.data)
        res.status(e.response.status);
        res.json(e.response.data);
    }
})


app.delete('/delete', async (req, res) => {
    // console.log(req.query)
    try {
        const response = await axios.delete(req.query.route, {
            headers: {
                Authorization: req.headers.authorization,
            },
            data: {...req.query, route: undefined },
        })
        console.log(response.status)
        res.json(response.data);
    } catch (e) {
        console.log('DELETE - error -> ', req.body.route,)
        console.log('DELETE - error -> status', e.response.status, ' message ->', e.response.data)
        res.status(e.response.status);
        res.json(e.response.data);
    }
})

app.listen(5000, () => console.log('Server ready'))