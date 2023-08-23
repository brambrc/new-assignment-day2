const eventModel = require('../models/eventModel.js');

const getAllEvents = (req, res) => {
  const events = eventModel.getAllEvents();
  res.json(events);
};

const getEventById = (req, res) => {
  const id = parseInt(req.params.id);
  const event = eventModel.getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
};

const createEvent = (req, res) => {
  const newEvent = eventModel.createEvent(req.body);
  res.status(200).json(newEvent);
};

const updateEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEvent = eventModel.updateEvent(id, req.body);
  if (updatedEvent) {
    res.json(updatedEvent);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
};

const deleteEvent = (req, res) => {
  const id = parseInt(req.params.id);
  eventModel.deleteEvent(id);
  res.status(200).end();
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};