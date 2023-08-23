const express = require('express');
const courseController = require('./controllers/courseController');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/course', courseController.getCourse);
app.post('/course', courseController.addNewCourse);
app.put('/course/:id', courseController.updateExistingCourse);
app.delete('/course/:id', courseController.removeCourse);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})