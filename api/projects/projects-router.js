// Write your "projects" router here!

const router = require('express').Router()

const Projects = require('./projects-model')

const { idChecker, checkPayload } = require('./projects-middleware')

// Returns an array of projects as the body of the response
router.get('/', (req, res, next)=>{
    Projects.get()
        .then(projects=>{
            res.status(200).json(projects)
        })
        .catch(next)
})
// Returns a project with the given id as the body of the response
router.get('/:id', idChecker, (req, res)=>{
    res.status(200).json(req.project)
})
// Returns the newly created project as the body of the response
router.post('/', checkPayload, (req, res, next)=>{
    Projects.insert(req.body)
        .then(newProject=>{
            res.status(201).json(newProject)
        })
        .catch(next)    
})
// Returns the updated project as the body of the response
router.put('/:id', idChecker, checkPayload, (req, res, next)=>{
    Projects.update(req.params.id, req.body)
        .then(update=>{
            res.status(200).json(update)
        })
        .catch(next)
})
// Deletes an project. Returns no response body
router.delete('/:id', idChecker, (req, res, next)=>{
    Projects.remove(req.params.id)
        .then(project=>{
            res.json(project)
        })
        .catch(next)
    
})
// Returns an array of actions (could be empty) belonging to a project with the given id
router.get('/:id/actions', idChecker, (req, res, next)=>{
    Projects.getProjectActions(req.params.id)
        .then(actions=>{
            res.status(200).json(actions)
        }) 
        .catch(next)
})

module.exports = router