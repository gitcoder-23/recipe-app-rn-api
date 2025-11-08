import express from "express";
import { ENV } from "./config/env.js";
import job from "./config/cron.js";
import favoriteRouter from "./routes/favorite.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";

const app = express();
const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.use(express.json());

// Serve Swagger UI at the /api-docs route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(favoriteRouter);

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "API is healthy" });
});
