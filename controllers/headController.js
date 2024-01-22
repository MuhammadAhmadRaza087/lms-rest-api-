var Student = require('../models/studentModel');
var Class = require('../models/classModel');
var Teacher = require('../models/teacherModel');
var Admin = require('../models/adminModel');
const { json } = require('express');
//Admin
module.exports.addAdmin = (req, res, next)=>{
    Admin.create(req.body).then((result)=>{
        res.json(result);
    }).catch((err) => {
        return err;
    })
}
module.exports.viewAdmin = (req,res,next) =>{
    Admin.find().exec().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        return err;
    })
}
module.exports.findAdminById = (req, res, next)=>{
    Admin.findOne({_id:req.params.id}).exec().then((result)=>{
        res.json(result);
    }).catch((err) => {
        return err;
    })
}

module.exports.deleteAdminById = (req,res,next)=>{
    Admin.deleteOne({_id: req.params.id}).exec().then((result)=>{
    res.json(result);
    }).catch((err) => {
        return err;
    })
}
//Student
module.exports.viewStudents = (req, res, next)=>{
    Student.find().exec().then((result)=>{
        res.json(result);
    }).catch((err) => {
        return err;
    })
}
module.exports.findStudentById = (req, res, next) => {
    Student.findOne({ _id: req.params.id }).exec().then((result) => {
        res.json(result);
    }).catch((err) => {
        return err;
    })
}
//Teacher

module.exports.viewTeachers = (req, res, next) => {
    Teacher.find().exec().then((result) => {
        res.json(result);
    }).catch((err) => {
        return err;
    })
}
module.exports.findTeacherById = (req, res, next) => {
    Teacher.findOne({ _id: req.params.id }).exec().then((result) => {
        res.json(result);
    }).catch((err) => {
        return err;
    })
}