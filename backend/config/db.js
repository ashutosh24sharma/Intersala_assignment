import mongoose from "mongoose";
import { settings } from "./settings.js";
import logger from "../utils/logger.js";

// Cache connection across serverless invocations
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    logger.info("Using cached MongoDB connection");
    return;
  }

  // Prevent multiple connection attempts in serverless
  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    logger.info("MongoDB already connected");
    return;
  }

  try {
    const conn = await mongoose.connect(settings.mongodbUri, {
      // These options help with serverless environments
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB connection error: ${error.message}`);
    // Don't exit process in serverless — throw instead
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};