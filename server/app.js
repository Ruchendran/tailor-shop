const express=require("express");
const app=express();
const path=require("path");
const cors=require("cors");
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const dbPath=path.join(__dirname,'users.db');
app.use(express.json());
app.use(cors());
let db=null;
sqlite3
const jwtToken=require("jsonwebtoken");

initiate=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database
        })
        app.listen(4000,()=>{
            console.log("Server Running at http://localhost:4000")
        })
    }
    catch(e){
        console.log(`DB erroe: ${e.message}`);
        process.exit(1);
    }
}




initiate();



app.post("/post",async(request,response)=>{
    const {name,mail,password,phoneno}=request.body;
    const token=jwtToken.sign(password,"Qt2001");
    // console.log(token)
    const que=`
    insert into users (name,mail,password,phoneno)
    values
    (
        '${name}','${mail}','${token}','${phoneno}'
    )
    `;
    const final=await db.run(que);
    response.send("Successfully created user.");

})