const Testimonial = require("../models/testimonial");

const testimonialController = {
  getAllTestimonials: async (req, res) => {
    try {
      const testimonials = await Testimonial.find();
      res.status(200).json({ message: "All testimonials", data: testimonials });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getTestimonialById: async (req, res) => {
    // Implement logic to get a user by ID
  },

  createTestimonial: async (req, res) => {
    // Implement logic to create a new user
    try {
      const { name, photo, message, position } = req.body;
      const tesitmonialObj = new Testimonial({
        name,
        photo,
        message,
        position,
      });
      await tesitmonialObj.save();
      return res.status(200).json({ message: "Testimonial created" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateTestimonial: async (req, res) => {
    // Implement logic to update a user
    try {
      await Testimonial.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json({ message: "Testimonial updated" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteTestimonial: async (req, res) => {
    // Implement logic to delete a user
    try {
      await Testimonial.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Testimonial deleted" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = testimonialController;
