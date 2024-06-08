const express = require('express')
const router = express.Router()
const{Admin, Course} = require('../db/index')
const adminMiddleware = require('../middleware/admin')

router.post('/signup' , async(req,res ) =>{
    const username= req.body.username
    const password = req.body.password

    await Admin.create({
        username: username,
        password : password
    })

    res.json({
        message: 'Admin Created Successfully'
    })
});
router.post('/course', adminMiddleware, async(req,res) =>{
    const title = req.body.title
    const description = req.body.description
    const ImageLink = req.body.ImageLink
    const Price = req.body.Price

    const newCourse = await Course.create({
        title,
        description,
        ImageLink,
        Price
    })

    res.json({
        message: 'Course Created Successfully', CourseID: newCourse._id
    })
})

router.get('/course', adminMiddleware, async(req,res) =>{
    const response = await Course.find({});
    res.json(response)
})
module.exports = router