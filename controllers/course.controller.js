const Course = require("../models/course.model");
const addNewCouse = async (req, res) => {
  try {
    let { title, desc, domain, price, addedBy } = req.body;
    let newCourse = new Course({
      title,
      desc,
      domain,
      price,
      addedBy,
      image: req.file.path,
    });
    let result = await newCourse.save();
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    let result = await Course.find({}).populate('domain').populate('addedBy');
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    let { id } = req.params;
    let img = req.file.path;
    let dataToUpdate = req.body;
    if (img) {
      let result = await Course.findByIdAndUpdate(
        id,
        { ...dataToUpdate, image: img },
        { new: true }
      );
      res.json({
        success: true,
        result: result,
      });
    } else {
      let result = await Course.findByIdAndUpdate(
        id,
        { ...dataToUpdate },
        { new: true }
      );
      res.json({
        success: true,
        result: result,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const deleteCourse = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Course.findOneAndDelete(id);
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};

module.exports = {
  addNewCouse,
  getAllCourses,
  deleteCourse,
  updateCourse,
};
