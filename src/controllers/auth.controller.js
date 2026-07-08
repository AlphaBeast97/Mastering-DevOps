import logger from "#config/logger.js";
import { signUpSchema } from "#validations/auth.validation.js";
import { formatValidationError } from "#utils/format.js";
import { createUser } from "#services/auth.service.js";
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
