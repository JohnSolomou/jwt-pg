const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //gives you access to req.body

//routes
app.use("/auth", require("./routes/jwtAuth"));

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
