const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/express-lists';
const sessionSecret = process.env.SESSION_SECRET || 'YghT5s617/1{%sDt';

module.exports = { port, dbURI, sessionSecret };
