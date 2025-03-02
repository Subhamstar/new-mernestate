import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB !!');
}).catch((err) => {
    console.log('Error: ', err);
});
// Create Express App
const app = express();

app.use(express.json());

app.listen(3000, () => {
     console.log('Server is running on port 3000 !!');
    }
);

app.get('/', (req, res) => { //req from client, res from server
    res.json({
        message: 'Hello World !!'
    });
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);