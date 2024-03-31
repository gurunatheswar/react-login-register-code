const express = require("express");
const mysql = require('mysql');
const cors = require('cors' );
const app = express();
//var http = require('http').Server(app);
app.use(cors());
app.use(express.json())
// const db = mysql.createConnection({
//     host: "http://localhost/",
//     user: "root",
//     port:'3306',
//     password:' ',
//     database: "reactlognregister"
// })
const db = mysql.createConnection({
    host:"127.0.0.1",
    port:'3308',
    user:"root",
    password:"",
    database:"reactlognregister",
    connectionLimit:120000,
    debug:"false"
  });
  
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log('Connected to the database');
  });
// const db = mysql.createConnection({
//     host:'localhost',
//     port:'3306',
//     user:'root',
//     password:' ',
//     database:'some_database'
// });
console.log(db);
app.post('/signup', (req, res) => {
    console.log("res",res)
    const sql = "INSERT INTO ps_customer (`username`, `emailID`, `password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err) {
            return res.json({"Error":err});
        }
        return res.json(data);
    })
    // const sql =`SELECT * FROM user_detail`
    // db.query(sql,[],(err,data)=>{
    //     if(err) {
    //                 return res.json({"Error":err});
    //             }
    //             return res.json(data);
    // })
})

app.post('/signin', (req, res) => {
    console.log("res",res)
    const sql = "SELECT *  FROM `ps_customer` WHERE `emailID` LIKE ? and password =?";
    const values = [        
        req.body.email,
        req.body.password
    ]
    db.query(sql, [req.body.email,req.body.password], (err, data)=>{
        if(err) {
            return res.json({"Error":err});
        }
        return res.json(data);
    })
    // const sql =`SELECT * FROM user_detail`
    // db.query(sql,[],(err,data)=>{
    //     if(err) {
    //                 return res.json({"Error":err});
    //             }
    //             return res.json(data);
    // })
})

app.listen(8081, () => {
console.log("listening");
})