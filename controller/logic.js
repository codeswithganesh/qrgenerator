const path=require('path');
const qr=require('qr-image');
const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
});


router.post('/generateQr',(req,res,next)=>{
    const url = req.body.url; 
    console.log(url);
    if (!url) {
        return res.status(400).send('<h1>Error: URL query parameter is required</h1>');
    }

    const code = qr.image(url, { type: 'png' }); 
    res.type('png'); 
    code.pipe(res); 
});
module.exports=router;