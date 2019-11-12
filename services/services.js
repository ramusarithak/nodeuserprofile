module.exports={
    inserted,update
}

function inserted(pd){
return new Promise((resolve,reject)=>{
    console.log(pd)

    query='insert into profile(Name,Email) VALUES ("'+pd.name+'","'+pd.email+'")';
    db.query(query,(err,res,next)=>{
        if(res){
    console.log()
        resolve(res)
        }else{
            reject(err);
        }
    
    })
})

}
function update(pd){
    return new Promise((resolve,reject)=>{
        query='update profile set Email=? where id=',
        ["kokik@gmai.com",1],
        (err,result)=>{
            if(err){
                throw err
            } 
        }
    })
}