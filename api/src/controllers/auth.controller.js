import bcrypt from "bcryptjs";
import authService from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.getUserByEmail(email);
    if (!user) {
      return res.status(401).send({ message: "E-mail or password incorrect" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "E-mail or password incorrect" });
    }

    const token = authService.generateToken(user.id);

    res.send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default { login };
