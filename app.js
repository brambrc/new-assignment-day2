const express = require('express');
const eventController = require('./controllers/eventController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/events', eventController.getAllEvents);
app.get('/events/:id', eventController.getEventById);
app.post('/events', eventController.createEvent);
app.put('/events/:id', eventController.updateEvent);
app.delete('/events/:id', eventController.deleteEvent);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
