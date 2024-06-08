const {Users} = require('../db/index')

function  usermiddleware(req,res, next){
    const username = req.headers.username
    const password = req.headers.password

    Users.findOne({
        username: username,
        password: password
    }).then(function(value){
        if(value){
            next()
        }
        else{
            res.status(401).json({
                msg: "user not found"
            })
        }
    })
}
module.exports = usermiddleware