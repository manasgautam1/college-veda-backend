const mongoose = require("mongoose");

const contactFormDataSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  source: {
    type: String,
  },
});

const ContactFormData = mongoose.model(
  "ContactFormData",
  contactFormDataSchema
);

module.exports = ContactFormData;
