const express=require('express')
const app = express()
const fetch = require('node-fetch');

app.listen(3000,()=>{
    console.log("server started at port 3000")
})

app.get("/numbers",async (req,res)=>{
const allurls =req.query.url;
if (!allurls) {
    return res.status(400).json({ error: 'url not provided' });
  }
  let urlList = Array.isArray(allurls) 
  if(urlList){
    urlList = Array.isArray(allurls) ? allurls : [url];
  }
  else{
    urlList =  allurls 

  }
  //console.log(urlList)
  let ans=[]
  
    await fetch(urlList[urlList.length-1], {
        method:'GET',
      })
        .then(response => response.json())
        .then(data => {
            for(let j=0;j<data.numbers.length;j++){
                ans.push(data.numbers[j])
            }
            //ans.push(data.numbers)
            console.log(ans)
             res.json(ans);
         
        })
        .catch(error => {
          console.error('Error:', error);
        });
    
  
  //const uniqueList = [...new Set(ans)];
  //console.log(uniqueList)
  //res.json(uniqueList)

})