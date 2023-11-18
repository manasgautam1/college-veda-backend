const College = require("../models/college");
const University = require("../models/university");

const collegeController = {
  getAllColleges: async (req, res) => {
    try {
      const colleges = await College.find();
      res.status(200).json({ data: colleges, message: "All colleges" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getCollegesWithFilter: async (req, res, next) => {
    const collegePerPage = 10;
    const { page, state, city, collegeType, fullName } = req.body;
    const skip = (page - 1) * collegePerPage;

    try {
      const query = {};
      if (!!state) {
        query.state = state;
      }
      if (!!city) {
        query.city = city;
      }
      if (fullName) {
        query.fullName = { $regex: new RegExp(fullName, "i") };
      }
      if (collegeType) {
        query.collegeType = collegeType;
      }

      const totalItems = await College.countDocuments();
      const colleges = await College.find(query)
        .skip(skip)
        .limit(collegePerPage)
        .exec();

      return res.status(200).json({
        data: colleges,
        currentPage: page,
        totalPages: Math.ceil(totalItems / collegePerPage),
        message: "All colleges with filtered",
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getCollegeById: async (req, res) => {
    // Implement logic to get a user by ID
    try {
      const collegeData = await College.findById(req.params.id);
      return res
        .status(200)
        .json({ data: collegeData, message: "College by id" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  createCollege: async (req, res) => {
    // Implement logic to create a new user
    try {
      const {
        fullName,
        logo,
        coverpic,
        description,
        gallery,
        reviews,
        state,
        city,
        pincode,
        website,
        phone,
        address,
        status,
        yearOfEstabilish,
        university,
        collegeType,
      } = req.body;

      const collegeObj = new College({
        fullName,
        logo,
        coverpic,
        description,
        gallery,
        reviews,
        state,
        city,
        pincode,
        website,
        phone,
        address,
        status,
        yearOfEstabilish,
        collegeType,
      });

      if (!!university) {
        const universityObj = await University.findOne({ _id: university });
        universityObj.colleges.push(collegeObj._id);
        await universityObj.save();
      }
      await collegeObj.save();
      return res.status(200).json({ message: "College added successfully" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateCollege: async (req, res) => {
    // Implement logic to update a user
    try {
      const collegeData = await College.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return res.status(200).json({ message: "College updated" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteCollege: async (req, res) => {
    // Implement logic to delete a user
    try {
      await College.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "College deleted" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = collegeController;
