const express = require('express');
const { connectDB, getDB } = require('./src/db/db.js');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');

app.use(express.json());

connectDB();

app.post('/api/v3/app/events', async (req, res) => {
  const event = req.body;

  try {
    const db = getDB();
    const result = await db.collection('events').insertOne(event);
    res.status(201).json({msg:'event created', eventId: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

app.get('/api/v3/app/events/', async (req, res) => {
    const eventId = req.query.id;
  
    try {
      const db = getDB();
      const event = await db.collection('events').findOne({ _id: new ObjectId(eventId) });
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ error: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch event' });

    }
  });

  app.get('/api/v3/app/events/latest', async (req, res) => {
    const { limit, page } = req.query;
    const pageSize = parseInt(limit) || 5;
    const pageNumber = parseInt(page) || 1;
  
    try {
      const db = getDB();
      const events = await db.collection('events')
        .find({})
        .sort({ schedule: -1 }) 
        .skip(pageSize * (pageNumber - 1)) 
        .limit(pageSize)  
        .toArray();
      
      res.status(200).json(events);
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });

  app.put('/api/v3/app/events/:id', async (req, res) => {
    const eventId = req.params.id; 
    const updatedEvent = req.body; 
    
    try {
      const db = await getDB();
      const result = await db.collection('events')
        .updateOne({ _id: new ObjectId(eventId) }, { $set: updatedEvent });
      
      if (result.modifiedCount > 0) {
        res.status(200).json({ message: 'Event updated successfully' });
      } else {
        res.status(404).json({ error: 'Event not found or no changes made' });
      }
    } catch (error) {
      console.error('Error updating event:', error); 
      res.status(500).json({ error: 'Failed to update event', details: error.message }); 
    }
  });
  app.delete('/api/v3/app/events/:id', async (req, res) => {
    const eventId = req.params.id;
    
    try {
      const db = await getDB(); // Wait for the DB connection
      const result = await db.collection('events').deleteOne({ _id: new ObjectId(eventId) }); // Use ObjectId to convert the string to ObjectId
      
      if (result.deletedCount > 0) {
        res.status(200).json({ message: 'Event deleted successfully' });
      } else {
        res.status(404).json({ error: 'Event not found' });
      }
    } catch (error) {
      console.error('Error deleting event:', error); 
      res.status(500).json({ error: 'Failed to delete event', details: error.message }); 
    }
  });
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

