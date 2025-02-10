const express = require('express')
require('dotenv').config()
const port = process.env.PORT||6000
const bhavi = express();

bhavi.use(express.json())

bhavi.get('/abc',(req,res)=>{
    res.status(200).json({bhavindra:'Hello World'})
})


bhavi.post('/abc',(req,res)=>{
    const {Email,Password} = req.body
    if(!Email)
        return res.status(400).json({bhavindra:'Hello, Email not found'})
    if (!Password)
        return res.status(400).json({bhavindra:'Password not found'})
    if(Password.length <8 || Password.length>40)
        return res.status(400).json({bhavindra:'Password not Verified'})
    
    return res.status(200).json({bhavindra:'Everthing is Correct'}) 
})
bhavi.listen(port,()=>{
   console.log(`connected successfully ${port}`)
})

