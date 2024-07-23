import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


let projectData = {};

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())

app.use(cors());

app.use(express.static('website'));

app.get('/all', function(req, res){
  res.send(projectData);
})

app.post('/add', function(req, res){
  projectData = req.body
})

// Setup Server

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})