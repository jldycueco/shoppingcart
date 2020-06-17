import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import config from './config';

import orderRoute from './route/Order';
import productRoute from './route/Product';

const { PORT, MONGO_URI } = config;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db is connected'));

// Route
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);

// Serve static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
