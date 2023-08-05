const express= require ("express")
const server=express()
const cors=require("cors")
server.use(cors({origin:"http://localhost:3000"}))
//convert json to js 
server.use(express.json())
const logic=require('./services/logic')
const db = require("./db");

server.post("/login", (req, res) =>{
    console.log(req.body.email);
    logic.login(req.body.email,req.body.password).then(result=>{
      res.status(result.statusCode).json(result)
    })
  })

  server.post("/register", (req, res) =>{
    logic.registerUser(
      req.body.email,
      req.body.username,
      req.body.password
      ).then(result=>{
        console.log(result);
      res.status(result.statusCode).json(result)
    })
  })

  server.listen(8000, () => {
    console.log("ems server started at port 8000");
  });
  