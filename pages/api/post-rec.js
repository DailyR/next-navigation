// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import { readFileSync,writeFileSync } from 'fs'
import fs from 'fs'
import path from "path"



// 似乎接收不了下划线，中划线可以api route到 -  ，_不行
export default function handler(req, res) {
  //res.status(200).json({ name: 'John Doe' })
  //const email = req.body.email;
  const email = "test_post_rec1111";
  //console.log("email:"+email)
  const email2 = "22222";
  
  if (req.url == "/api/post-rec?test=test111&id=1") 
      {

          res.status(200).json({ text: 'Hello1111',email: {email}, req:req.url});
      } 
  else if (req.url == "/api/post-rec?test=test111&id=2")
      {
          fs.writeFileSync(path.join(process.cwd(), 'data', `user.json`), "{\"name\": \"Anoyi🐬\"}")

          res.status(200).json({ text: 'Yes ,Just Test',email:"lidai@163.com", req:req.url});

      }
  else 
      {

          fs.writeFileSync(path.join(process.cwd(), 'data', `user.json`), "{\"name\": \"Daily\"}")

          const user = fs.readFileSync(path.join(process.cwd(), 'data', `user.json`), 'utf-8')

          const content1 = JSON.parse(user)

          
          
          //const user = Read_file()

          //const content1 = user

          res.status(200).json({ text: 'Hello565',email: {email2}, content1: content1 });
      }

  
}
