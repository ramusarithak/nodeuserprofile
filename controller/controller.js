const da=require('../services/services');
const router=require('express').Router();


module.exports=router;

router.post('/inserted',datas);

router.put('/update',du)

let pd=req.body;

function datas(req,res,next){
// console.log(pd);
    da.inserted(pd)
    
    .then((res)=>{
        res.status(200).send ({ data:res })
    }).catch((err)=>{
        res.status(200).send({data:err})
    })
    }

    function du(req,res,next){
        da.update(pd)
        .then((res)=>{
            res.status(200).send({data:res})
        }).catch((err)=>{
            res.status(200).send({data:err})
        })
    }