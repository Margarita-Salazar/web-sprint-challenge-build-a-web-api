// Write your "actions" router here!
const router = require('express').Router()

const Actions = require('./actions-model')

const { idActionChecker, checkActionPayload } = require('./actions-middleware')

// Returns an array of actions (or an empty array) as the body of the response
router.get('/', (req, res, next)=>{
    Actions.get()
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(next)
})
// Returns an action with the given id as the body of the response
router.get('/:id', idActionChecker, (req, res)=>{
    res.status(200).json(req.action)
})
// Returns the newly created action as the body of the response
router.post('/', checkActionPayload, (req, res, next)=>{
    Actions.insert(req.body)
        .then(action=>{
            res.status(201).json(action)
        })
        .catch(next)
})
// Returns the updated action as the body of the response
router.put('/:id', idActionChecker, checkActionPayload, (req, res, next)=>{
    Actions.update(req.params.id, req.body)
        .then(action=>{
            res.status(200).json(action)
        })
        .catch(next)
}) 
// Deletes an action. Returns no response body
router.delete('/:id', idActionChecker, (req, res, next)=>{
     Actions.remove(req.params.id)
        .then(action=>{
            res.json(action)
        })
        .catch(next)
})

module.exports = router