const express=require('express')
const app = express()
const fetch = require('node-fetch');


app.listen(3000,()=>{
    console.log("server started at port 3000")
})

app.get('/train',(req,res)=>{
    const url = 'http://104.211.219.98/train/trains'; 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODc0MTI3NzIsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYTRkMGM2ODQtYmZlNS00OGY5LThkNDUtNDdjYzFiNjUwNGI0Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwODgxQTA1MDUifQ.pgxh-jXcpqHUkIYZp_NKZLBd0_5tdXGutygxnFMJRuc'; 

  fetch(url, {
    method:'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});



app.get('/train/:id',(req,res)=>{
    const url = `http://104.211.219.98/train/trains/${req.params.id}`; 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODc0MTI3NzIsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYTRkMGM2ODQtYmZlNS00OGY5LThkNDUtNDdjYzFiNjUwNGI0Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwODgxQTA1MDUifQ.pgxh-jXcpqHUkIYZp_NKZLBd0_5tdXGutygxnFMJRuc'; 

  fetch(url, {
    method:'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});
