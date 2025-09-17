require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Cloudtype가 주는 PORT 우선 사용
const PORT = process.env.PORT || 3000;

// ===== CORS (Netlify + 프리뷰 + 로컬 허용) =====
const allowList = [
  /^http:\/\/localhost:5173$/, // 로컬 개발
  /^https:\/\/company-web-frontend\.netlify\.app$/, // Netlify 프로덕션
  /^https:\/\/.*--company-web-frontend\.netlify\.app$/, // Netlify 프리뷰(브랜치/PR)
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true); // 서버 헬스체크/내부 호출 등
    const ok = allowList.some((re) => re.test(origin));
    return ok
      ? callback(null, true)
      : callback(new Error("Not allowed by CORS: " + origin));
  },
  credentials: true,
};

app.use(cors(corsOptions));
// 프리플라이트(OPTIONS) 대응
app.options("*", cors(corsOptions));
// =============================================

// 🔸 프록시(Cloudtype) 뒤에서 secure 쿠키 신뢰 (중요!)
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 라우터
const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const postRoutes = require("./routes/post");
const uploadRoutes = require("./routes/upload");

app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// MongoDB 연결
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB와 연결이 되었습니다."))
  .catch((error) => console.log("MongoDB와 연결에 실패했습니다: ", error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
