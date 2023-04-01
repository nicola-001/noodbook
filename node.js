const express=require('express')
const app=express()

app.get('/aaa',(req,res)=>{
    const data=[
        {aaa:"bbb"},
        {ccc:"ddd"}
    ]
    res.json(data)
    //转换成普通字符串
    /* res.end("aa") */
})
app.listen(8080,(err)=>{
    if(!err)console.log("node-text");
})