const express = require('express');

const db= require('./data/db.js');

const server = express();

server.use(express.json());

// let postComments = [
//     {
//         id: 1,
//         text: "The text of the comment", // String, required
//         post_id: "The id of the associated post", // Integer, required, must match the id of a post entry in the database
//         created_at: `Mon Aug 14 2017 12:50:16 GMT-0700 (PDT)`, // Date, defaults to current date
//         updated_at: `Mon Aug 14 2017 12:50:16 GMT-0700 (PDT)` // Date, defaults to current date
//   }
// ]

server.get('/', (req, res) => {
    res.status(200).json({api: 'api working'})
})

server.get('/api/posts', (req, res) => {
    let posts = [...db]
    res.status(200).json(posts)
})

server.get('/api/posts/:id', (req, res) => {
    let posts = [...db]
    res.status(200).json(posts)
})

server.post('/api/posts', (req, res) => {
    console.log(req)
    // if(!title || !contents){
    //     res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    // }
})

// server.get('/api/posts', (req, res) => {
//     res.status(200).json(postComments)
// })

module.exports = server;