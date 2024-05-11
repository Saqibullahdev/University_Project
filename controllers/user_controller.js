const { userRepository } = require("../repositories/user_repositry");

const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await userRepository.LoginUser(req.body);
    res
      .cookie("user_token", token)
      .status(200)
      .json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
};
