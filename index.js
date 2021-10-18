const express = require('express')
const students =require('./students')
const app=express()
app.use(express.json())

app.listen(3900,()=>{
  console.log("Server is running")
})

app.get('/',(req,res)=>{
  res.json("api is working....")
})

app.get('/students',(req,res)=>{
  res.json(students)
})

// insert data into local server
app.post('/students',(req,res)=>{
  // condition for check particular data is parser or not...
  if (!req.body.gender){
    res.status(404)
    return res.json({message:"gender data is not send"})
  }
  
    const user={
      id:students.length+1,
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      gender:req.body.gender
    }
    students.push(user)
    res.json(user)
})

// updata data on local server....................
app.put('/students/:id',(req,res)=>{
  const id =req.params.id
   // finding the values
  let first_name=req.body.first_name
  let last_name=req.body.last_name
  let email=req.body.email
  let gender=req.body.gender   

  let index=students.findIndex((student)=>{
    return (student.id==Number.parseInt(id))
  })
  if(index>=0){
    let std=students[index];
    std.first_name=first_name;
    std.last_name=last_name;
    std.email=email;
    std.gender=gender
    res.json(std)
  }else
  {
    res.status(404)
  }
})