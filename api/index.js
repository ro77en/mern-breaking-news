import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';

dotenv.config();
 
const app = express();
const port = process.env.PORT || 8080;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
