import express from 'express';
import { Createuser, GetUser, UpdateUser, DeleteUser } from '../controller/UserController.js'; // Include GetUser here

const routers = express.Router();

routers.post('/create', Createuser); // Create user route
routers.get('/get', GetUser); // Get user route
routers.put('/update/:id', UpdateUser); // Update user route
routers.delete('/delete/:id', DeleteUser)
export default routers;