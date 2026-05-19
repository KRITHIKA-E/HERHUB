import jwt from "jsonwebtoken";

const jwtSecret =
  process.env.JWT_SECRET ||
  "default_jwt_secret";

export const authenticateToken = (

  req,
  res,
  next

) => {

  try {

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {

      return res.status(401).json({

        message:
          "No token provided",

      });
    }

    // EXTRACT TOKEN

    const token =
      authHeader.split(" ")[1];

    if (!token) {

      return res.status(401).json({

        message:
          "Invalid token format",

      });
    }

    // VERIFY TOKEN

    const decoded =
      jwt.verify(
        token,
        jwtSecret
      );

    req.user = decoded;

    next();

  } catch (err) {

    console.error(
      "JWT ERROR:",
      err
    );

    return res.status(401).json({

      message:
        "Unauthorized access",

    });
  }
};