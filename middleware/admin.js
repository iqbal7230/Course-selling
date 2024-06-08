const {Admin} = require('../db/index')

function adminMiddleware(req,res,next){

    const uesername = req.headers.uesername
    const password = req.headers.password

    Admin.findOne({
        uesername: uesername,
        password: password
    }).then(function(value){
        if(value){
            next()
        }
        else{
            res.status(401).json({
                msg: "admin not found"
            })
        }
    })
}
module.exports = adminMiddleware