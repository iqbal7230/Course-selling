const {Router} = require('express')
const router = Router()
const usermiddleware = require('../middleware/user')
const{Users, Course}= require('../db/index')
const {default: mongoose} = require('mongoose')

router.post('/signup', (req, res) => {
    const username = req.body.username
    const password= req.body.password

    Users.create({
        username,
        password
    })
    res.json({
        message: 'User Created Successfully'
    })
})
router.get('/course', usermiddleware, async(req,res) =>{
    const courseID = req.headers.cousseID
    const username = req.headers.username

    await Users.updateOne({
        username:username
    },{
        "$push":{
            PurchasedCourse: courseID
        }
    })
    res.json({
        message: 'Course Purchased Successfully'
    })
})
router.get('/purchasedcourse', usermiddleware, async(req, res) =>{
    const user = await  Users.findOne({
        username: req.headers.username
    })
    console.log(user.PurchasedCourse);
    const Course = await Course.find({
        _id:{
            $in: user.PurchasedCourse
        }
    })
    res.json(Course)
})
module.exports = router