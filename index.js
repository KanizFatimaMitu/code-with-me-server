const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.POrt || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://kaniz:FQ9VftzJYPjKBXnM@cluster0.8n7ml4a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

async function run() {
    try {
        const questionsCollection = client.db('code-with-me').collection('questions');

        // http://localhost:5000/questions
        app.get('/questions', async (req, res) => {
            const questions = await questionsCollection.find({}).toArray();
            res.send(questions)
        })

    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('hello ami mitu')
})

app.listen(port, () => {
    console.log(`listening on port 5000`)
})