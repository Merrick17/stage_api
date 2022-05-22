const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost:27017/stages").then(() => {
  console.log("db connected..");
});
const userRouter = require("./routes/user.routes");
const steRouter = require("./routes/ste.routes");
const offreRouter = require("./routes/offre.routes");
const participationRouter = require("./routes/participation.routes");
const centreRouter = require("./routes/centre.routes");
const domainRouter = require("./routes/domain.routes");
const courseRouter = require("./routes/course.routes");
app.use("/users", userRouter);
app.use("/ste", steRouter);
app.use("/offre", offreRouter);
app.use("/participation", participationRouter);
app.use("/centre", centreRouter);
app.use("/domain", domainRouter);
app.use("/formation", courseRouter);

app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(3500, () => {
  console.log("App is running");
});
