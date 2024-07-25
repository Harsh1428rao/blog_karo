require("dotenv").config();
const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require("../config/dbConnect");
const mongoose = require("mongoose");
app.use(cors());
const corsOptions = require('../config/corsOptions');


connectDB();
//user routes => /api/users and /api/user
app.use(cors(corsOptions));
app.use(express.json()); //middleware to parse json

// user routes for /api/users and /api/user
app.use("/api", require("../routes/userRoutes"));


// article routes 

app.use("/api/articles", require("../routes/articleRoutes"));
app.use("/api/tags", require("../routes/tagRoutes"));
app.use("/api/articles", require("../routes/commentRoutes"));


mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
    console.log('Error while connection to MongoDB: ',err)
});