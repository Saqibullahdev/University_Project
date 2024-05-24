const { generateToken } = require("../helpers/jwtToken");
const { Admin } = require("../models/index");
const { hashPassword } = require("../helpers/hashpassword");
const bycrypt = require("bcrypt");

class AdminRepository {
  async createAdmin({ Username, Email, Password }) {
    try {
      let hashpswd = await hashPassword(Password);
      console.log(hashpswd);
      const admin = await Admin.create({
        Username,
        Email,
        Password: hashpswd,
      });

      if (!admin) return false;
      return admin;
      
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async LoginAdmin({ Email, Password }) {
    try {
      const admin = await Admin.findOne({
        where: {
          Email,
        },
      });

      if (!admin) return false;
      const isMatch = bycrypt.compareSync(Password, admin.Password);
      if (!isMatch) return false;
      const token = generateToken({
        id: admin.AdminID,
        Username: admin.Username,
        Email: admin.Email,
        Role: admin.Role,
      });
      return token;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

    async updateAdmin({ Username, Email, Password, AdminID }) {
    try {
      Password = await hashPassword(Password);
      const admin = await Admin.update({
        Username,
        Email,
        Password,
      }, {
        where: {
          AdminID
        }
      });

      if (!admin) return false;
      return admin;
      
    } catch (error) {
      console.log(error);
      return error.message;
    }
}
}


const adminRepository = new AdminRepository();

module.exports = adminRepository;