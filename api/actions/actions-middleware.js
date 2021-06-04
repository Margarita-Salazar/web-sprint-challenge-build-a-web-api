const Actions = require('./actions-model')
const Projcet = require('../projects/projects-model')

function idActionChecker(req, res, next){
    Actions.get(req.params.id)
        .then(action =>{
            if(action){
                req.action = action
                next()
            }else{
                res.status(404).json({
                    message: `Action with ID ${req.params.id} not found`
                })
            }
        })
        .catch(next)
}

function checkActionPayload(req, res, next){
    const { project_id, notes, description, } = req.body
    if(
        !project_id ||
        !typeof project_id === 'number' ||
        !description ||
        !description.trim() ||
        !notes ||
        !notes.trim()
        ){
            res.status(400).json({
                message: 'valid project_id, notes and description required'
            })
        }else if(description.length > 180){
            res.status(400).json({
                message: 'description must be less than 180 characters'
            })
        }else{
                Projcet.get(project_id)
                .then(project=>{
                    if(project){
                        next()
                    }else{
                        res.status(404).json({
                            message: `Projcet with ID ${project_id} not found`
                        })
                    }
                })
                .catch(next)
        }
}
module.exports = {
    idActionChecker,
    checkActionPayload
}