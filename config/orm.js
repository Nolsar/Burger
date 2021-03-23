const connection = require('./connection');

const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, values, cb) {
        let queryString = "INSERT INTO ?? VALUES ?";
        console.log(queryString);
        connection.query(queryString, [table, cols, values], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, values, condition, cb) {
        let queryString = "UPDATE ?? VALUES ? WHERE ?";
        console.log(queryString);
        connection.query(queryString, [table, values, condition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};


module.exports = orm;