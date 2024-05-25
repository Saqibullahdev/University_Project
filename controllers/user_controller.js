const { userRepository } = require("../repositories/user_repositry");

const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);
    res.status(201).json({ message: "User created successfully",succuss:true});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {

    const token = await userRepository.LoginUser(req.body);
    if (!token) {
      return res.status(400).json({ message: "Invalid credentials",succuss:false });
    }
    res.cookie("user_token", token)
      .status(200)
      .json({ message: "User logged in successfully",succuss:true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("user_token").status(200).json({ message: "User logged out successfully" ,succuss:true});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const isLoggedin = async (req, res) => {
  try {
    res.status(200).json({ message: "User is logged in",succuss:true, user: req.user });
  } catch (error) {
    res.status(500).json({ error: error.message ,succuss:false});
  }
}
module.exports = {
  createUser,
  loginUser,
  logoutUser,
  isLoggedin
};
