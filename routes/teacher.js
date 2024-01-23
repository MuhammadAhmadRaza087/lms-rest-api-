var express = require('express');
var router = express.Router();
var Teacher = require("../models/teacherModel");
var Class = require("../models/classModel");
router.get('/', (req, res, next) => {
    res.send("<h1>Teacher Dashboard</h1>");
})

// For Personal Info
router.get('/personalInfo/:id', (req, res, next) => {
    Teacher.find({_id:req.params.id}).exec().then((result)=>{
        res.json(result);
        
    }).catch((err)=>{
        console.log(err)
    })
});
// For Assigned Classes
router.get('/assignedClasses/:id', (req, res, next) => {
    Class.find({teacher: req.params.id}).exec().then((result) => {
        res.json(result); 
    }).catch((err) => {
        console.log(err)
    })
});
//For Checking Students
router.get('/studentsofAssignedClasses/:id', (req, res, next) => {
    Class.find({ teacher: req.params.id }).populate('students').exec().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});


module.exports = router;