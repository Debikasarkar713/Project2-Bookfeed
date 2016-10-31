const MongoClient = require('mongodb');

const connectionURL = process.env.MONGOAB_URI || 'mongodb://localhost/books';

function getDB() {
  return MongoClient.connect(connectionURL);
}
module.exports = {
  getDB,
};
