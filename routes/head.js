var express = require('express');
var router = express.Router();
var headController = require('../controllers/headController'); 
router.get('/', (req, res, next) => {
    res.send("<h1>Head Dashboard</h1>");
})


//GET
router.get('/admins', headController.viewAdmin); 
router.get("/admin/:id", headController.findAdminById);
router.get('/students', headController.viewStudents);
router.get("/student/:id", headController.findStudentById);
router.get('/teachers', headController.viewTeachers);
router.get("/teacher/:id", headController.findTeacherById);
//POST
router.post('/addadmin', headController.addAdmin);

//DELETE
router.delete('/adminDelete/:id', headController.deleteAdminById);


module.exports = router;