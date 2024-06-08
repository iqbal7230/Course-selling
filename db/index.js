const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://iqbal1234:Iqbal%401234@cluster0.zjjnyic.mongodb.net/")

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'course'
        }
    ]
})

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    ImageLink: String,
    Price: Number,

})

const Admin = mongoose.model('admin',AdminSchema)
const Users = mongoose.model('Users',UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports = {Admin, Users, Course}