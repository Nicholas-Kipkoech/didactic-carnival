const User = require("../schemas/User");

exports.createUser = async (req, res) => {
  const { name, username, password, confirmPassword, email } = req.body;

  try {
    const newUser = await User.create({
      name,
      username,
      password,
      confirmPassword,
      email,
    });
    if (!newUser) {
      return res.status(404).json({ message: "no user created" });
    }
    return res.status(200).json({ newUser });
    newUser.save();
  } catch (error) {
    return res.status(500).json({ error });
  }
};
