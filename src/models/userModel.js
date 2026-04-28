import Database from '../config/db.js'

class UserModel {
  // Get all users
  static async getAllUsers() {
    try {
      const users = await Database.query('SELECT * FROM user');
      return users;
    } catch (error) {
      throw error;
    }
  }

  // Get user by ID
  static async getUserById(id) {
    try {
      const [user] = await Database.query('SELECT * FROM user WHERE id = ?', [id]);
      return user || null;
    } catch (error) {
      throw error;
    }
  }

  // Create new user
  static async createUser(name) {
    try {
      const { insertId } = await Database.query('INSERT INTO user (name) VALUES (?)', [name]);
      return {
        id: insertId,
        name
      };
    } catch (error) {
      throw error;
    }
  }

  // Update user
  static async updateUser(id, name) {
    try {
      const user = await this.getUserById(id);
      if (!user) {
        return null;
      }

      await Database.query('UPDATE user SET name = ? WHERE id = ?', [name, id]);
      return {
        id,
        name
      };
    } catch (error) {
      throw error;
    }
  }

  // Delete user
  static async deleteUser(id) {
    try {
      const user = await this.getUserById(id);
      if (!user) {
        return null;
      }

      await Database.query('DELETE FROM user WHERE id = ?', [id]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UserModel;
