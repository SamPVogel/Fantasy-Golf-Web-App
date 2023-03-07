const { MongoClient } = require('mongodb');
const config = require('./envs/config.js');

const uri = `${config.DB_TYPE}://${config.DB_USER}:${config.DB_PASS}@${config.DB_HOST}:${config.DB_PORT}`;
console.log(uri);

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect();
        await client.db(`${config.DB_DB_NAME}`).command({ ping: 1 });
        console.log("Success");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);