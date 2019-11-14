const express = require('express')
const mysql=require('mysql');
const app = express();
const port=3000;
const bodyParser=require('body-parser');



const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'userprofile'
})



db.connect((err)=>{
if(err){
    throw err;
}
console.log('connect to database');
})


global.db=db

app.use(express.json());
app.use(express.urlencoded(({ extended:true })) )
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/profile',require('./controller/controller'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
app.listen(port, () => {
  console.log('Server started!'+port);
});