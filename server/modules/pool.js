const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'fs-redux-starter-db', 
});

module.exports = pool;
