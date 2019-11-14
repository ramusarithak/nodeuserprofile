
const bcrypt=require('bcrypt');
const saltRounds=10;
const nodemailer=require('nodemailer');



module.exports={ inserted,update,getuserprofile,deletea}


function getuserprofile(){
    return new Promise((resolve,reject)=>{
        query='select * from profile ';
        console.log("table data"+query);
        db.query(query,(err,res,next)=>{
            if(res){
                console.log(res);
                var data = JSON.stringify(res);
                resolve(res)
            }else{
                reject(err)
            }
        })
    })
}

  
        
function inserted(data){
return new Promise((resolve,reject)=>{
    console.log('in pds',data)

    
    bcrypt.hash(data.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        console.log("password encrypt....",hash);
        toSendEmail(data.email)
      

    query=`insert into profile(Name,Email,Phonenumber,Address,Password,Role,Profilepicture,isActive,isVerfied,token) VALUES ("`+data.name+`","`+data.email+`","`+data.phonenumber+`","`+data.address+`","`+hash+`","`+data.role+`","`+data.profilepicture+`","`+data.isactive+`","`+data.isverified+`","`+data.token+`")`;
        db.query(query,(err,res,next)=>{
            console.log('error',err);
        if(res){
    console.log('response',res)
        resolve(res)

        }else{
            reject(err);
        }
    
    })

})
});

}
function update(data){
    return new Promise((resolve,reject)=>{
        console.log('updatekjhdfgkjhfdjkfdjk')
        query=`update profile set Name="`+data.name+`", Email="`+data.email+`" where id=`+data.id,
        // console.log("updated......"+query);
        db.query(query,(err,res,next)=>{
            if(res){
                resolve (res)
            } else{
                reject (err)
                console.log(resssss)
                
            }
        })
        
            
    
})
}



function deletea(data){
    return new Promise((resolve,reject)=>{
        console.log("delelelee");
        query=`delete from profile where id=`+data.id;
        db.query(query,(err,res,next)=>{
            if(res){
                resolve(res)
            }else{
                reject(err) 
            }
        })
    })
}


// function tosendmail(email){
//     console.log('EMail', email)
//     var transport=nodemailer.createTransport({
//         service:'Gmail' ,
//         auth:{
//             user:'ramusarithak@gmail.com',
//             pass:'RAmu54321'
//         }

//     });
//     console.log("sender email");
    
//     var mail={
//         from    :'ramusarithak@gmail.com',
//         to      : email,
//         subject :'this is testes email request',
//         text    :'Visit this  http://localhost:3000',
//         html    :'<a href="http:localhost:3000/verified"><h1>Verify Email</h1></a>'
//     }
//     transport.sendMail(mail,function(email_err,email_data){
//         if(email_err){
//             console.log("email error",email_err);
//             return email_err;
//         }else{
//             console.log("email response success")
//             res.json({result:1})
//            }
//     })

// }


function toSendEmail(email) {

  
      var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ramuarun1111@gmail.com',
          pass: 'RAmu54321'
        }
      });
  
      console.log("http://localhost:3000/verifyEmail/");
  
      var mailOptions = {
        from    : 'ramuarun1111@gmail.com',
        to      :  email,
        subject : 'This is Activation test mail',
        text    : 'Visit this  http://localhost:3000/verifyEmail/' ,
        html    : '<a href="http://localhost:4200/"><h3>Verify Email</h3></a>'
      }
  
      transport.sendMail(mailOptions, function (email_err, email_data) {
        if (email_err) {
          console.log(email_err);
          return email_err;
        } else {
          console.log('Email is Sent',email_data);
          res.json({ result: 1 })
        }
      })
  
    }