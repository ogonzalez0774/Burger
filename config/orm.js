// Dependencies
const connection = require("./connection.js");

// Object Relational Mapper
// Passing in query parameters for all 3 methods
const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * from ??";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (tableInput, columnName, burgerName, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnName, burgerName], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function (tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export ORM
module.exports = orm;