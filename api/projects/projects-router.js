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
router.post('/', checkPayload, (req, res, next)=>{
    Projects.insert(req.body)
        .then(newProject=>{
            res.status(201).json(newProject)
        })
        .catch(next)    
})
router.put('/:id', idChecker, checkPayload, (req, res, next)=>{
    Projects.update(req.params.id, req.body)
        .then(update=>{
            res.status(200).json(update)
        })
        .catch(next)
})
router.delete('/:id', idChecker, (req, res, next)=>{
    Projects.remove(req.params.id)
        .then(project=>{
            res.json(project)
        })
        .catch(next)
    
})
router.get('/:id/actions', idChecker, (req, res, next)=>{
    Projects.getProjectActions(req.params.id)
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(next)
})

module.exports = router