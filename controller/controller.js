const da=require('../services/services');
const router=require('express').Router();
var express=require('express')
var app=express()
module.exports=router;

router.get('/getuserprofile',getUserFile);
router.post('/ins',insertProfile);
router.put('/update',updateProfile)
router.delete('/delete',deleteProfile);


// get userprofile
function getUserFile(req,res,next){
da.getuserprofile()
  .then((resData)=>{
      console.log('res',res)
    res.status(200).send({data:resData})
}).catch((err)=>{
    res.status(200).send({data:err})
})
}
//end  get userprofile





// start of data insertprofile 
function insertProfile(req,res,next){
   
    da.inserted(req.body)
    
    .then((resD)=>{
        res.status(200).send ({ data:resD})
    }).catch((err)=>{
        res.status(200).send({data:err})
    })
    }
//  end of data insertprofile



    // start of updateprofile
    function updateProfile(req,res,next){
        
        da.update(req.body)
        .then((resdat)=>{
            res.status(200).send({data:resdat})
        }).catch((err)=>{
            res.status(200).send({data:err})
        })
    }
// end of updateprofile
    


// start of deleteprofile
function deleteProfile(req,res,next){
    // let pd=req.body;
    da.deletea(req.body)
    .then((response)=>{
res.status(200).send({data:response})
    }).catch((err)=>{
        res.status(200).send({data:err})
    })

}
// end of deleteprofile