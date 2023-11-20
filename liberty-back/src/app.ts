const express = require('express')
const bodyParser = require('body-parser');
const paymentsRoute = require('./routes/payments');

const app = express();
const port = 3000;

// Routes
app.use('/api/payments', paymentsRoute);

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});