const express= require('express');
const routes=express.Router();
const scholarshipController= require('../controller/scholarship-controller');
routes.post('/addScholarship',scholarshipController.AddScholarship);
routes.get('/getScholarship',scholarshipController.getScholarship);
routes.post('/getScholarshipById',scholarshipController.getScholarshipById);
module.exports= routes;