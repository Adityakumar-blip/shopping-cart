const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv")
env.config({path:"./config/.env"})
const mongooose = require("mongoose");
const createProduct = require("./routes/routes");
const isAdmin = require("./routes/user-routes");
const passwordReset = require("./controllers/passwordReset")


const app = express();
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use("/api/v1", createProduct);
app.use("/api/v2", isAdmin);
app.use("/api/v2/password-reset", passwordReset)

const ConnectionUrl =
  "mongodb+srv://aditya:3HN1FuFuepP37u87@cluster0.rcmepru.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongooose
  .connect(ConnectionUrl, {
    useNewUrlParser: true,
  })
  .then(() => 
    app.listen(PORT, () => {
      console.log(`port is running on ${PORT}`);
    })
  )
  .catch((err) => console.error(err));
