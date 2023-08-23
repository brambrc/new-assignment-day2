let Course = [
    {id : 1, nameCourse: `IPA`, Author: `Soraya`},
    {id : 2, nameCourse: `Sejarah`, Author: `Terada kuto`},
    {id : 3, nameCourse: `Matematika`, Author: `Sarto Kawaraya`},
]

getAllCourse = () => Course;

addCourse = (course) => {
    const newCourse = {
        id: course.length + 1,
        ...course
    };

    course.push(newCourse);
    return newCourse;
}

updateCourse = (id, updateCourse) => {
    const courseIndex = courses.findIndex(b => b.id == id);
    if (courseIndex === -1) return null;

    course[courseIndex] = { id, ...updateCourse};
    return course[courseIndex];
}

deleteCourse = (id) => {
    const courseIndex = courses.findIndex(b => b.id == id);
    if (courseIndex === -1) return null;

    course.splice(courseIndex, 1);
    return true;
}

module.exports = {
    getAllCourse,
    addCourse,
    updateCourse,
    deleteCourse
}