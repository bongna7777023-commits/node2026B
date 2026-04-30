import UserModel from '../models/userModel.js'

class UserController {
  // GET all users
  async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch ({ message }) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  // GET single user by ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const userId = parseInt(id);
      const user = await UserModel.getUserById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch ({ message }) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  // CREATE new user
  async createUser(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ error: 'Name is required' });
      }

      const user = await UserModel.createUser(name);
      res.status(201).json(user);
    } catch ({ message }) {
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  // UPDATE user
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const userId = parseInt(id);

      if (!name) {
        return res.status(400).json({ error: 'Name is required' });
      }

      const user = await UserModel.updateUser(userId, name);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch ({ message }) {
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  // DELETE user
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const userId = parseInt(id);
      const result = await UserModel.deleteUser(userId);

      if (!result) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch ({ message }) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}

export default UserController;
