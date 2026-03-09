import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import { settings } from "./config/settings.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import proposalRoutes from "./routes/proposalRoutes.js";
import impactRoutes from "./routes/impactRoutes.js";
import whatsappRoutes from "./routes/whatsappRoutes.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();

// ── Connect to MongoDB ───────────────────
connectDB();

// ── Security & parsing ───────────────────
app.use(helmet());

// ── CORS — handle OPTIONS preflight FIRST ───────────────────
app.options("*", cors());

app.use(
  cors({
    origin: [
      "https://intersala-assignment.vercel.app",   // ✅ your actual Vercel URL
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "10mb" }));

// ── Logging (dev only) ───────────────────
if (settings.nodeEnv !== "production") {
  app.use(morgan("dev"));
}

// ── Routes ────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    message: "Sustainable AI Platform API",
    version: "1.0.0",
    status: "running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    environment: settings.nodeEnv,
    timestamp: new Date().toISOString(),
    modules: {
      category_generator: "active",
      proposal_generator: "active",
      impact_reporting: "planned",
      whatsapp_bot: "planned",
    },
  });
});

app.use("/api/v1/categorize", categoryRoutes);
app.use("/api/v1/proposals", proposalRoutes);
app.use("/api/v1/impact", impactRoutes);
app.use("/api/v1/whatsapp", whatsappRoutes);

// ── Error handling ────────────────────────
app.use(notFound);
app.use(errorHandler);

// ── Start server (Render needs this, unlike Vercel) ──────────
const PORT = process.env.PORT || settings.port || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT} [${settings.nodeEnv}]`);
});

export default app;