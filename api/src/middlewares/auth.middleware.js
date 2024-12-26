import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({
        message: "Unauthorized access",
      });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send({
        message: "Unauthorized access",
      });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.status(401).send({
        message: "Unauthorized access",
      });
    }

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message:
            "Unauthorized access: Invalid Token. Please log into your account again.",
        });
      }

      console.log(decoded);
      const user = await userService.getById(decoded.id);

      if (!user || !user.id) {
        return res.status(401).send({
          message:
            "Unauthorized access: Invalid Token. Please log into your account again.",
        });
      }

      req.userId = user.id;
      return next();
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};
