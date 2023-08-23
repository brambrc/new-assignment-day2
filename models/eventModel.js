let events = [];

const getAllEvents = () => {
  return events;
};

const getEventById = (id) => {
  return events.find((event) => event.id === id);
};

const createEvent = (event) => {
  event.id = events.length + 1;
  events.push(event);
  return event;
};

const updateEvent = (id, updatedEvent) => {
  const index = events.findIndex((event) => event.id === id);
  if (index !== -1) {
    events[index] = { id, ...updatedEvent };
    return events[index];
  }
  return null;
};

const deleteEvent = (id) => {
  const index = events.findIndex((event) => event.id === id);
  if (index !== -1) {
    events.splice(index, 1);
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
