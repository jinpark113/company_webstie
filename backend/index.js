require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const postRoutes = require("./routes/post");
const uploadRoutes = require("./routes/upload");

// ===== CORS 허용 도메인 =====
const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://company-web-frontend.netlify.app",
];
const envAllowed =
  process.env.CLIENT_ORIGIN?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) || [];

const allowlist = [
  ...new Set([...defaultAllowedOrigins, ...envAllowed]),
  /\.netlify\.app$/, // 모든 Netlify 프리뷰 허용
];

const corsOptions = {
  origin(origin, cb) {
    if (!origin) return cb(null, true); // 서버-서버/헬스체크 등
    const ok = allowlist.some((rule) =>
      rule instanceof RegExp ? rule.test(origin) : rule === origin
    );
    return ok ? cb(null, true) : cb(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  optionsSuccessStatus: 204,
};

// CORS는 반드시 라우트보다 먼저
app.use(cors(corsOptions));
// 프리플라이트 처리
app.options("*", cors(corsOptions));

// 프록시 뒤에서 secure 쿠키 허용
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ===== 라우트 =====
app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => res.send("Hello world"));

// ===== DB =====
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB와 연결이 되었습니다."))
  .catch((error) => console.log("MongoDB와 연결에 실패했습니다: ", error));

app.listen(PORT, () => console.log("Server is running"));
