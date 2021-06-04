const express = require('express');
const server = express();
const projectsRouter = require('./projects/projects-router')
const actionRouter = require('./actions/actions-router')

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionRouter)

server.use((err, req, res, next)=>{ // eslint-disable-line
    res.status(err.status || 500).json({
        custom: "Something went wrong",
        message: err.message,
        stack: err.stack,
      })
})

module.exports = server;    
