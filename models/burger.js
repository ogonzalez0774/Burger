const orm = require("../config/orm.js")

//Passes in query parameters
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function (burgerName, cb) {
        origin.insertOne("burgers", "burger_name", burgerName, function (res) {
            cb(res)
        });
    },
    updateOne: function (burgerID, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", burgerID, function (res) {
            cb(res)
        });
    }
};

//export
module.exports = burger;