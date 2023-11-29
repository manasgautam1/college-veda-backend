const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api/contact", require("./routes/contactFormDataRoutes"));
app.use("/api/colleges", require("./routes/collegeRoutes"));
app.use("/api/universities", require("./routes/universityRoutes"));
app.use("/api/showcase", require("./routes/showcaseRoutes"));

// Add other routes as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
