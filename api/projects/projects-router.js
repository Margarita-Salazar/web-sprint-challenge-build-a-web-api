// Write your "projects" router here!

const router = require('express').Router()

const Projects = require('./projects-model')

router.get('/', (req, res, next)=>{
    Projects.get()
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(next)
})
router.get('/:id', (req, res)=>{
    
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