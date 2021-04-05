const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');



app.use(cors());
app.use(bodyParser.json());

const users =["Asad","Based","Suhana",'Liza',"Dipto", 'shujon'];

// const rootCall = (req, res) =>{res.send('Thank you very much')}
app.get('/',(req, res)=>{
    const fruit ={
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});
app.get('/fruit/banana', (req, res) =>{
    res.send({fruit:'banana', quantity:1000, price: 10000})
})

app.get('/users/:id', (req, res) => {
//   console.log(users.params);
    const id = req.params.id;
    const name = users[id];
    res.send(id, name);
});

//Post
app.post('/addUser',(req, res)=>{
 console.log('post send');
});



app.listen(3000, ()=> console.log('listening port 3000'));