// Write your "actions" router here!
const router = require('express').Router()

const Actions = require('./actions-model')

const { idActionChecker, checkActionPayload } = require('./actions-middleware')

router.get('/', (req, res, next)=>{
    Actions.get()
        .then(actions=>{
            res.status(200).json(actions)
        })
        .catch(next)
})
router.get('/:id', idActionChecker, (req, res)=>{
    
})
router.post('/', (req, res)=>{
    
})
router.put('/', (req, res)=>{
    
})
router.delete('/', (req, res)=>{
    
})

module.exports = router