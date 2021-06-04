// Write your "projects" router here!

const router = require('express').Router()

const Projects = require('./projects-model')

const {idChecker} = require('./projects-middleware')

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
router.post('/', (req, res)=>{
    
})
router.put('/', (req, res)=>{
    
})
router.delete('/', (req, res)=>{
    
})
router.get('/', (req, res)=>{
    
})

module.exports = router