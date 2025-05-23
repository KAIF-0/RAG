import { createClient } from "redis";
import { config } from "dotenv";

config();
// console.log(process.env.REDIS_CHAT_INSTANCE_URL);
export const chatRedisClient = createClient({
  url: process.env.REDIS_CHAT_INSTANCE_URL,
});

export const getDocsFromRedis = async (key) => {
  try {
    const result = await chatRedisClient.get(key);
    return result || "";
  } catch (error) {
    throw new Error("Error in getting data from Redis: " + error);
  }
};
