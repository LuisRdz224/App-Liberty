const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const paymentsRoute = require('./routes/payments');

const app = express();
const port = 3000;

app.use(cors())
app.use(
    cors({
        origin: [
            'http://localhost:4200'
        ]
    })
)
// Routes
app.use('/api/payments', paymentsRoute);

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});