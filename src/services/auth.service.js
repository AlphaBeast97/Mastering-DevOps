import bcrypt from "bcrypt";
import logger from "#config/logger.js";
import { eq } from "drizzle-orm";
import { users } from "#models/users.model.js";
import { db } from "#config/db.js";

export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (e) {
    logger.error(`Error hashing password: ${e.message}`);
    throw new Error("Error hashing password");
  }
};

export const createUser = async ({ name, email, role, password }) => {
  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (existingUser.length > 0) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(password);
    const [newUser] = await db
      .insert(users)
      .values({ name, email, role, password: hashedPassword })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        created_at: users.created_at,
      });

    return newUser;
  } catch (e) {
    logger.error(`Error creating user: ${e.message}`);
    throw new Error("Error creating user");
  }
};

export const verifyPassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (e) {
    logger.error(`Error verifying password: ${e.message}`);
    throw new Error("Error verifying password");
  }
};

export const signInUser = async ({ email, password }) => {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      throw new Error("User not found");
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      throw new Error("Invalid password");
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (e) {
    logger.error(`Error signing in: ${e.message}`);
    throw e;
  }
};
