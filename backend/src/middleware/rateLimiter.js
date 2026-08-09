import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) return res.statys(429).json({ message: "Too Many Requests" });
    next();
  } catch (error) {
    console.error("Rate Limit Error: ", error)
  }
};

export default rateLimiter;
