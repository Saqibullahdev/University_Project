const express = require("express");
const app = express();
const { sequelize } = require("./models/index");
const V1Router = require("./routes/V1/index");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cloudinaryConnect=require("./config/CloudnaryConnect")
const cors=require("cors")
const isAdmin=require('./middleware/isAdmin')



app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
      createParentPath: true,

  
    })
  );
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", V1Router);


cloudinaryConnect() 

const PORT = process.env.PORT || 3000;
app.get("/", isAdmin,(req, res) => {
  return res.json({ message: "Welcome to our application" });
});

app.post("/upload", (req, res) => {
    const file = req.files.file;
    res.json({ message: "File uploaded successfully" })
    console.log(file)
    });
sequelize
  .authenticate()
  .then(() => {
    return sequelize.sync({ force: false ,alter:false});
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });