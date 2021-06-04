const Projects = require('./projects-model')

function idChecker(req, res, next){
    Projects.get(req.params.id)
        .then(project =>{
            if(project){
                req.project = project
                next()
            }else{
                res.status(404).json({
                    message: `Projcet with ID ${req.params.id} not found`
                })
            }
        })
        .catch(next)
}

function checkPayload(req, res, next){
    const { name, description } = req.body
    if(
        !name ||
        !name.trim()||
        !description ||
        !description.trim()
        ){
            res.status(400).json({
                message: 'name and description required'
            })
        }else{
            next()
        }
}
module.exports = {
    idChecker,
    checkPayload
}