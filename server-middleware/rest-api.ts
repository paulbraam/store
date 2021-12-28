import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes
app.get('/products', async (req, res) => {
  const productsApiUrl = process.env.API_ORIGIN + '/products';
  const response = await axios.get(productsApiUrl);
  res.json(response.data);
});

export default app;
