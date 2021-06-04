// Write your "projects" router here!

const router = require('express').Router()

const Projects = require('./projects-model')

const { idChecker, checkPayload } = require('./projects-middleware')

router.get('/', (req, res, next)=>{
    Projects.get()
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(next)
})
router.get('/:id', idChecker, (req, res)=>{
    res.status(200).json(req.project)
})
router.post('/', checkPayload, (req, res)=>{
    res.status(201).json(req.newProject)
})
router.put('/:id', (req, res)=>{
    
})
router.delete('/:id', (req, res)=>{
    
})
router.get('/:id/actions', (req, res)=>{
    
})

module.exports = router