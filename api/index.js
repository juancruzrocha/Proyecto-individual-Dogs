
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {
  SERVER_PORT
} = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(SERVER_PORT || 3001, () => {
    console.log(`Listening at ${SERVER_PORT}`) // eslint-disable-line no-console
  });
} );
