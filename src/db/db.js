const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://nikunjkumar2911:admin@cluster0.yo0kk.mongodb.net/dt_thought?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db('eventManagement');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection failed:', err);
    throw new Error('Database connection failed');
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
