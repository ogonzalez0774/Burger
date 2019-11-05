const mysql = require("mysql")

//sets connection options
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ford2015@",
        database: "burgers_db"
    });
}
connection.connect(function (err) {
    if (err) {
        console.error("error connecting " + err.stack)
        return;
    }
    console.log("connected as id " + connection.threadId)
});

//exports MYSQL connection
module.exports = connection;