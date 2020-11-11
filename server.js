const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
// const auth = require("./routes/api/auth");
// app.use("/api/users", auth);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI ||
    db,
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false}
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

app.use(require("./routes"));

// Passport config
require("./config/passport")(passport);

// Routes
// app.use("/api/users", auth);

// Connect to Mongoose

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finalProject", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
