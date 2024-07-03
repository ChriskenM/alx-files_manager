// server.js
import express from 'express';
import bodyParser from 'body-parser';
import controllerRouting from './routes/index.js';

const app = express();
const port = process.env.PORT || 5000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Use the controllerRouting to define routes
controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;

