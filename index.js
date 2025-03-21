const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(express.static('public'));
mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log(err);
    })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
   res.render('create');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
