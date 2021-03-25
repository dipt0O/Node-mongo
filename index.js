const express = require('express')
const app = express()

const users =["Asad","Based","Suhana",'Liza',"Dipto", 'shujon'];
const rootCall = (req, res) =>{res.send('Thank you very much')}
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

app.get('users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[usersId];
    res.send(name);
});

app.listen(3000, ()=> console.log('listening port 3000'));