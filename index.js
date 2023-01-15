const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Railway Server is Running');
})



const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.jnuj2ye.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {

    app.get('/searchTrainsResults/search', async (req, res) => {
        const trainQueryInfo = req.query;
        console.log(trainQueryInfo);
        console.log('hit')




        const trainInfo = trainQueryInfo;
        res.send({ ...trainInfo });
    })


}

run().catch((err) => console.log(err));

app.listen(port, () => {
    console.log('Server is Running')
})



