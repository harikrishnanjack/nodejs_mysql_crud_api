var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var db=require('../db');
var router=express.Router();
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/get/:id',function(req,res,next){
db.query(`select * from users where id=?`,[req.params.id],function(err,rows,fields){
    if(err){
        res.json({message:"Wrong"})
    }
    else{
        res.json(rows[0])
    }

})
})
router.get('/get',function(req,res,next){
    db.query(`select * from users`,[req.body.user,req.body.password],function(err,rows){
    if(err){
        res.json({message:"error"})
    }
    else{
        res.json(rows)
    }
    })
    })
router.post('/create',function(req,res,next){
db.query(`insert into users (user,password) values (?,?)`,[req.body.user,req.body.password],function(err,data){
if(err){
    res.json({message:"error"})
}
else{
    res.json({data:'success'})
}
})
})
router.put('/update/:id',function(req,res,next){
db.query(`update users set user=?,password=? where id=?`,[req.body.user,req.body.password,req.params.id],function(error,results,fields){
    if(error) throw error;
    res.json({data:'updated successfully'})
})
})
router.delete('/delete/:id',function(req,res,next){
db.query(`delete from users where id=?`,[req.params.id],function(err,data){
    if(err) throw err;
    res.json({data:'deleted'});
})
})

module.exports=router;