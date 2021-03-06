const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res,nex)=>{
  res.json(
    {name:'server blog-tdd'}
  )
})

const blog = require('./routes/blog');
const user = require('./routes/user');

app.use('/users',user);
app.use('/articles',blog);

module.exports = app.listen(process.env.PORT || 3000, ()=>{
  console.log('Listening from port 3000');
})
