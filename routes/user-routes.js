const express= require('express');
const routes=express.Router();
const userController= require('../controller/user-controller');
routes.post('/register',userController.Register);
routes.post('/login',userController.Login);
module.exports= routes;

