const { User } = require("../models/index");
const { generateToken } = require("../helpers/jwtToken");
const { hashPassword } = require("../helpers/hashpassword");
const bcrypt = require("bcrypt");

class UserRepositry {
  async createUser({ Username, Email, Password }) {
    try {
      if(!Username || !Email || !Password){
        throw new Error("Please fill all the fields");
      }
      const hasdpswd = await hashPassword(Password);
      console.log("pwsed hashed");
      const newUser = await User.create({
        Username,
        Email,
        Password: hasdpswd,
      });
      newUser.save();
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw new Error("Error creating user");
    }
  }

  async LoginUser({ Email, Password }) {
    try {
      if(!Email || !Password){
        throw new Error("Please fill all the fields");
      }
      const existingUser = await User.findOne({ where: { Email } });
      if (!existingUser) {
        throw new Error("User not found");
      }
      const isPasswordMatch = await bcrypt.compare(
        Password,
        existingUser.Password
      );
      if (!isPasswordMatch) {
        throw new Error("Incorrect password");
      }
      const token = generateToken({
        Username: existingUser.Username,
        UserID: existingUser.UserID,
        email: existingUser.Email,
        Role: "User",

      });
      console.log(token);
      return token;
    } catch (error) {
      console.error("Error logging in user:", error.message);
      throw new Error("Error logging in user");
    }
  }

  async updateUser({ Username, Email, Password, UserID }) {
    try {
      if(!Username || !Email || !Password){
        throw new Error("Please fill all the fields");
      }
      const hashedPassword = await hashPassword(Password);
      Password = hashedPassword;
      const updatedUser = await User.update(
        {
          Username,
          Email,
          Password,
        },
        {
          where: {
            UserID,
          },
        }
      );
      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error.message);
      throw new Error("Error updating user");
    }
  }

  async deleteUser({ UserID }) {
    if(!UserID){
      throw new Error("Please fill all the fields");
    }
    try {
      const deletedUser = await User.destroy({
        where: {
          UserID,
        },
      });
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error.message);
      throw new Error("Error deleting user");
    }
  }

  
}

const userRepository = new UserRepositry();
module.exports = { userRepository };
