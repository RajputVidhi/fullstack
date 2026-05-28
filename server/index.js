const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    const log = new Date().toLocaleString();
    fs.appendFile("log.txt",`\t Request came at ${log} path: ${req.url} \n `,(err)=>{ });
    res.end("Hello User!");
});

server.listen(8000,()=>{
    console.log("Server running on port 800");
})