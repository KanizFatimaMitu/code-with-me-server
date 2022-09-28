const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.POrt || 5000;

app.use(cors());
app.use(express.json());

// kaniz
// FQ9VftzJYPjKBXnM

const uri = "mongodb+srv://kaniz:FQ9VftzJYPjKBXnM@cluster0.8n7ml4a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})