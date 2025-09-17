require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// 여기만 수정
//const PORT = 3000;     //삭제 됨
const PORT = process.env.PORT || 3000; //추가 됨

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const postRoutes = require("./routes/post");
const uploadRoutes = require("./routes/upload");

// allow CORS for Netlify and other configured origins
const defaultAllowedOrigins = [
  "http://localhost:5173",
  "https://company-web-frontend.netlify.app",
];

const allowedOrigins =
  process.env.CLIENT_ORIGIN?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) || defaultAllowedOrigins;

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const isAllowed =
      allowedOrigins.includes(origin) || /\.netlify\.app$/.test(origin);
    callback(isAllowed ? null : new Error("Not allowed by CORS"), isAllowed);
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

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// trust proxy so secure cookies work behind Cloudtype/Netlify proxies
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB와 연결이 되었습니다."))
  .catch((error) => console.log("MongoDB와 연결에 실패했습니다: ", error));

app.listen(PORT, () => {
  console.log("Server is running");
});
