const CourseModel = require(`../models/courseModel`);


getCourse = (req, res) => {
    res.json(CourseModel.getAllCourse());
}

addNewCourse = (req, res) => {
    const newCourse = CourseModel.addCourse(req.body);
    res.json({message: `Course added!`, course: newCourse});
}

updateExistingCourse = (req, res)  => {
    const updateCourse = CourseModel.updateCourse(parseInt(req.params.id), req.body);
    if (!updateCourse) return res.status(404).json({ message : `course not found`});
    res.json({ message: `Course Updated!`, course: updateCourse});
}

removeCourse = (req, res) => {
    const success = CourseModel.deleteCourse(parseInt(req.params.id));
    if (!success) return res.status(404).json({ message : `course not found`});
    res.json({ message: `Course deleted!`});
}

module.exports = {
    getCourse,
    addNewCourse,
    updateExistingCourse,
    removeCourse
}