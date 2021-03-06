const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/categories", require("./routes/categoriesRoute"));
app.use("/items", require("./routes/itemsRoute"));
app.use("/lists", require("./routes/listsRoute"));
app.use("/signin", require("./routes/signIn"));
app.use("/signup", require("./routes/signUp"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
