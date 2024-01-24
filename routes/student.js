var express = require('express');
var router = express.Router();
var Class = require('../models/classModel')
var Student = require('../models/studentModel')
router.get('/', (req, res, next) => {
    res.send("<h1>Student Dashboard</h1>");
})

// For personal Info 
router.get('/personalInfo/:sid', (req, res, next) => {
    Student.find({ _id: req.params.sid }).exec().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});
// For Assigned Class Section
router.get('/assignedClasses/:sid', (req, res, next) => {
    Class.find().exec().then((result) => {
        let found = false;

        result.forEach((element) => {
            var student = element.students;

            for (let i = 0; i < student.length; i++) {
                if (student[i].sid == req.params.sid) {
                    found = true;
                    break;
                }
            }
        });
        if (found) {
            res.json(result);
        } else {
            // If student with the given sid is not found in any class
            res.status(404).json({ error: 'Student not found in any class' });
        }
    })
});

module.exports = router;