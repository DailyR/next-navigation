// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //res.status(200).json({ name: 'John Doe' })
  //const email = req.body.email;
  const email = "lidai";
  //console.log("email:"+email)
  res.status(200).json({ text: 'Hello',email: {email} });
  
}
