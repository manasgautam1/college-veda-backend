const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController");
const reviewsController = require("../controllers/reviewsController");

// Define routes for users
router.get("/", collegeController.getAllColleges);
router.get("/:id", collegeController.getCollegeById);
router.post("/", collegeController.createCollege);
router.put("/:id", collegeController.updateCollege);
router.delete("/:id", collegeController.deleteCollege);
router.post("/filters", collegeController.getCollegesWithFilter);
router.post("/reviews/:id", reviewsController.createReview);
router.put("/reviews/:id", reviewsController.updateReview);

module.exports = router;
