const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Railway Server is Running');
})
app.listen(port, () => {
    console.log('Server is Running')
})



