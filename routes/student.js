var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h1>Student Dashboard</h1>");
})


module.exports = router;