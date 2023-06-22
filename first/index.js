const express=require('express')
const app = express()
const fetch = require('node-fetch');


app.listen(3000,()=>{
    console.log("server started at port 3000")
})
//api to get all trains details 
app.get('/train',(req,res)=>{
    const url = 'http://104.211.219.98/train/trains'; 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODc0MTY4MDMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYTRkMGM2ODQtYmZlNS00OGY5LThkNDUtNDdjYzFiNjUwNGI0Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwODgxQTA1MDUifQ.SOpUsJ9GU4TO49IiWiVbNAO9-G-Bl1s9ps43ukCCU7c'; 
    let alltrains=[]
  fetch(url, {
    method:'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
        alltrains=data
        //console.log(alltrains)

        //descending order of seats available
        alltrains.sort((a, b) => {
            const seatsA = a.seatsAvailable.sleeper + a.seatsAvailable.AC;
            const seatsB = b.seatsAvailable.sleeper + b.seatsAvailable.AC;
            if (seatsA > seatsB) {
              return -1;
            } else if (seatsA < seatsB) {
              return 1;
            } else {
              return 0;
            }
          });
          //ascending order of price
          alltrains.sort((a, b) => {
            const priceA = a.price.sleeper + a.price.AC;
            const priceB = b.price.sleeper + b.price.AC;          
            if (priceA < priceB) {
              return -1;
            } else if (priceA > priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          //descending order of time
          alltrains.sort((a, b) => {
            const timeA = a.departureTime.Hours;
            const timeB = b.departureTime.Hours;
            if (timeA > timeB) {
              return -1;
            } else if (timeA < timeB) {
              return 1;
            } else {
              return 0;
            }
          });
          
          //console.log(alltrains);
            res.json(alltrains)
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});


//api to get train details by id
app.get('/train/:id',(req,res)=>{
    const url = `http://104.211.219.98/train/trains/${req.params.id}`; 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODc0MTY4MDMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYTRkMGM2ODQtYmZlNS00OGY5LThkNDUtNDdjYzFiNjUwNGI0Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwODgxQTA1MDUifQ.SOpUsJ9GU4TO49IiWiVbNAO9-G-Bl1s9ps43ukCCU7c'; 

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