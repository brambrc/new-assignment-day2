const validateEventData = (req, res, next) => {
    const { name, date, location } = req.body;
    if (!name || !date || !location) {
      return res.status(400).json({ message: 'Invalid event data' });
    }
    next();
  };
  
  app.post('/events', validateEventData, eventController.createEvent);