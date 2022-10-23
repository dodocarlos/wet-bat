const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), 'development.env'),
});

const { Client } = require('pg');
const fs = require('fs');

async function run() {
  console.log('Running seed files...');

  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  try {
    await client.connect();

    const seedFiles = fs.readdirSync('./database/seeds');

    for (const fileName of seedFiles) {
      console.log(`Running seed ${fileName}`);
      const insert = fs.readFileSync(`./database/seeds/${fileName}`, 'utf8');
      await client.query(insert);
    }
  } catch (err) {
    console.error(`An error ocurred: ${err.message}`);
  } finally {
    client.end();
  }
}

run();
