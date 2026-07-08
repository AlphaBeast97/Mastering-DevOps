import logger from "#config/logger.js";
import { signUpSchema, signInSchema } from "#validations/auth.validation.js";
import { formatValidationError } from "#utils/format.js";
import { createUser, signInUser } from "#services/auth.service.js";
import { jwtToken } from "#utils/jwt.js";
import { cookies } from "#utils/cookies.js";

export const signUp = async (req, res, next) => {
  try {
    const validationResult = signUpSchema.safeParse(req.body || {});

    if (!validationResult.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: formatValidationError(validationResult.error),
      });
    }

    const { name, email, role, password } = validationResult.data;

    const user = await createUser({ name, email, role, password });

    const token = jwtToken.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    cookies.set(res, "token", token);

    logger.info(`User signed up successfully ${email}`);
    return res.status(201).json({
      message: "User signed up successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error("signUp Error", error);

    if (error.message === "User with this email already exists") {
      return res.status(409).json({ error: "Email already exists" });
    }
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const validationResult = signInSchema.safeParse(req.body || {});

    if (!validationResult.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: formatValidationError(validationResult.error),
      });
    }

    const { email, password } = validationResult.data;

    const user = await signInUser({ email, password });

    const token = jwtToken.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    cookies.set(res, "token", token);

    logger.info(`User signed in successfully ${email}`);
    return res.status(200).json({
      message: "User signed in successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error("signIn Error", error);

    if (
      error.message === "User not found" ||
      error.message === "Invalid password"
    ) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    cookies.clear(res, "token");

    logger.info("User signed out successfully");
    return res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    logger.error("signOut Error", error);
    next(error);
  }
};
