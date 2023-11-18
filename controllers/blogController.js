const Blog = require("../models/blog");

const blogController = {
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ message: "All Blogs", data: blogs });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getBlogById: async (req, res) => {
    try {
      const blogarr = await Blog.findById(req.params.id);
      return res.status(200).json({ message: "Single blog", data: blogarr });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  createBlog: async (req, res) => {
    try {
      const { title, date, body, blogPic, author } = req.body;
      const blogObj = new Blog({
        title,
        date,
        body,
        blogPic,
        author,
      });
      await blogObj.save();
      return res.status(200).json({ message: "Blog created" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateBlog: async (req, res) => {
    try {
      await Blog.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json({ message: "Blog Updated" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteBlog: async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Blog Deleted" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = blogController;
