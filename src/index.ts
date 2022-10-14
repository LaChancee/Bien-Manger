require('dotenv').config();

import express from 'express';
import { PORT } from './config/constants';
import { router } from './routes/Recipe';

const app = express();
app.use(express.json());

//Les routes    
app.get('/recipe/show/:id', router)

app.get("/", (req, res) => res.send('Hello world'));


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})