import aj from "#config/arcjet.js";
import { slidingWindow } from "@arcjet/node";
import logger from "#config/logger.js";

const securityMiddleware = async (req, res, next) => {
  try {
    const role = req.user?.role || "guest"; // Default to 'guest' if role is not defined

    let limit, message;

    switch (role) {
      case "admin":
        limit = 20;
        message = "Admin access limit exceeded. Chill out, admin!";
        break;
      case "user":
        limit = 10;
        message = "User access limit exceeded. Please wait a moment.";
        break;
      case "guest":
        limit = 5;
        message =
          "Guest access limit exceeded. Consider signing up for more access.";
        break;
    }

    const client = aj.withRule(
      slidingWindow({
        mode: "LIVE",
        interval: 60, // 1 minute
        max: limit,
        name: `${role}-rate-limit`,
      }),
    );

    const decision = await client.protect(req);

    if (decision.isDenied() && decision.reason.isBot()) {
      logger.warn(`Bot access denied for role: ${role}`, {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        path: req.path,
      });

      res.status(403).json({
        error: "Forbidden",
        message: "Bot access denied.",
      });

      return;
    }

    if (decision.isDenied() && decision.reason.isShield()) {
      logger.warn(`Shield access denied for role: ${role}`, {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        path: req.path,
        method: req.method,
      });

      res.status(403).json({
        error: "Forbidden",
        message: "Shield access denied.",
      });

      return;
    }

    if (decision.isDenied() && decision.reason.isRateLimit()) {
      logger.warn(`Rate limit exceeded for role: ${role}`, {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        path: req.path,
      });

      res.status(403).json({
        error: "Forbidden",
        message: "Rate limit exceeded.",
      });

      return;
    }

    next();
  } catch (error) {
    console.error(`Security Middleware Error: ${error.message}`);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred in the security middleware.",
    });
  }
};

export default securityMiddleware;
