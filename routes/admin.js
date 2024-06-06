var express = require('express');
var router = express.Router();
var Student = require('../models/studentModel');
var Teacher = require('../models/teacherModel');
var Class = require('../models/classModel');

//Get
router.get('/', (req, res, next)=>{
    res.send("<h1>Admin Dashboard</h1>");
})
router.get('/students', (req, res, next) => {
    // res.json("<h1>List of Student</h1>");
    Student.find().exec().then((student)=>{
        res.json(student);
    }).catch((err)=>{
        // console.log("Error in getting student data", err);
        return err;
    })
})
router.get('/teachers', (req, res, next) => {
    Teacher.find().exec().then((teacher) => {
        res.json(teacher);
    }).catch((err) => {
        // console.log("Error in getting student data", err);
        return err;
    })
})
router.get('/classes', (req, res, next) => {
    Class.find().populate('teacher').populate('students.sid').exec().then((classes)=>{
        res.json(classes);
    }).catch((err)=>{
        return err;
    })
})


router.get('/students/:id', (req, res, next) => {
    Student.find({_id:req.params.id}).exec().then((student)=>{
        if(!student){
            throw new Error("Student not found");
        }else{
            res.json(student);
        } 
    })
})
router.get('/teachers/:id', (req, res, next) => {
    Teacher.find({ _id: req.params.id }).exec().then((teacher) => {
        if (!teacher) {
            throw new Error("Teacher not found");
        } else {
            res.json(teacher);
        }
    })
})
router.get('/classes/:id', (req, res, next) => {
    Class.find({ _id: req.params.id }).populate('teachers').populate('students.sid').exec().then((classes) => {
        if (!classes) {
            throw new Error("Class not found");
        } else {
            res.json(classes);
        }
    }).catch((err)=>{
        // return err;
        // res.statusCode();
        res.json("ID not Found");
    })
})
//Post
router.post('/addstudent', (req, res, next) => {
    Student.create(req.body).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
})
router.post('/addteacher', (req, res, next) => {
    Teacher.create(req.body).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    })
})
router.post('/addclass', (req, res, next) => {
    Class.create(req.body).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
})

// Put
router.put('/classes/:cid/:tid', (req, res, next) => {
    // res.json("Assigning Class to a Teacher");
    Class.findOneAndUpdate({_id:req.params.cid}, {teacher:req.params.tid}).then((result)=>{
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
})
// http://localhost:3000/admin/classes/6538ee2c1b981fd63e3dfa29/6538eb6526b7fd249bcc14a5
router.put('/assignStToClass/:cid/:sid', (req, res, next) => {
    Class.findOneAndUpdate({ _id: req.params.cid }, { $push: { students: { sid: req.params.sid } } }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
})


//Delete

router.delete('/delclass/:id', (req, res, next) => {
    // res.json("Deleting Class");
    Class.deleteOne({_id : req.params.id}).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    })
})


router.delete('/delstudent/:id', (req, res, next) => {
    Student.deleteOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
})


router.delete('/delteacher/:id', (req, res, next) => {
    Teacher.deleteOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
})


router.put('/updatestudent/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, rollno } = req.body;

    // Find the student by ID and update their name and roll number
    Student.findByIdAndUpdate(
        id,
        { name, rollno },
        { new: true, runValidators: true } // Options to return the updated document and run validation
    )
        .then((student) => {
            if (!student) {
                return res.status(404).send({ message: 'Student not found' });
            }
            res.status(200).send(student);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while updating the student' });
        });
});

module.exports = router;