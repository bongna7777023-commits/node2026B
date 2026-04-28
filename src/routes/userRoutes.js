import express from 'express'
import UserController from '../controllers/userController.js'

const router = express.Router();
const userController = new UserController();

// GET all users
router.get('/', (req, res) => userController.getAllUsers(req, res));

// GET single user by ID
router.get('/:id', (req, res) => userController.getUserById(req, res));

// CREATE new user
router.post('/', (req, res) => userController.createUser(req, res));

// UPDATE user
router.put('/:id', (req, res) => userController.updateUser(req, res));

// DELETE user
router.delete('/:id', (req, res) => userController.deleteUser(req, res));

export default router;
