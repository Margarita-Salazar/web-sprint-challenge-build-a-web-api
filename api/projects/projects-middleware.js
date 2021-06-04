const Projects = require('./projects-model')

function idChecker(req, res, next){
    Projects.get(req.params.id)
        .then(project =>{
            if(project){
                req.project = project
                next()
            }else{
                res.status(404).json({
                    message: `Projcet with ${req.params.id} not found`
                })
            }
        })
        .catch(next)
}

module.exports = {
    idChecker
}