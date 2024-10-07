// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const parcelRoutes = require('./routes/parcelRoutes');
const priceRouts = require('./routes/pricingRoutes');
const parcelpriceRoutes = require('./routes/parcelpriceRoutes');
const consignmentRoutes = require('./routes/consignmentRoutes');
dotenv.config();

// ডাটাবেস কানেকশন
connectDB();

const app = express();

// মিডলওয়্যার
 
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
}));

app.use(express.json());

// রাউটস
app.use('/api/auth', authRoutes);
app.use('/api', parcelRoutes);
app.use('', priceRouts);
app.use('', parcelpriceRoutes);
app.use('/api', consignmentRoutes);

// হেলথ চেক রাউট
app.get('/', (req, res) => {
    res.send('Steedfast Courier Services Backend is running');
});

// এরর হ্যান্ডলিং
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
 
// সার্ভার লিসেনিং
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
