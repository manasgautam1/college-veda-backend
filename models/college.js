const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  fee: {
    type: String,
  },
  specialization: {
    type: String,
  },
});

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  feedback: {
    type: String,
  },
  stars: {
    type: Number,
  },
});

const collegeSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  logo: {
    type: String,
  },
  coverpic: {
    type: String,
  },
  description: {
    type: String,
  },
  gallery: [],
  reviews: [reviewSchema],
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  address: {
    type: String,
  },
  status: {
    type: String,
  },
  yearOfEstabilish: {
    type: String,
  },
  university: {
    type: String,
  },
  courses: [courseSchema],
  collegeType: {
    type: String,
    enum: ["Private", "Government"],
  },
});

const Course = mongoose.model("Course", courseSchema);
const College = mongoose.model("College", collegeSchema);
const Review = mongoose.model("Review", reviewSchema);

module.exports = Course;
module.exports = College;
module.exports = Review;
