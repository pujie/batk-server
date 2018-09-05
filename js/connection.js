mysql = require("promise-mysql"),
config = require("./configs.js");
getdata = function(sql,callback){
    console.log("SQL",sql)
    mysqlconfig = config.mysql();
    console.log("Mysqlconfig",mysqlconfig)
    con = mysql.createConnection(mysqlconfig)
    .then(function(cn){
        var result = cn.query(sql);
        cn.end();
        return result;
    })
    .then(function(rows){
        callback(rows);
    })
    .error(function(err){
        console.log('Connection error',err);
    })
};
module.exports = {
    getdata: getdata
};