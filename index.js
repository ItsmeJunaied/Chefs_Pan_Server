const express=require('express');
const app=express();
const cors=require('cors');
const port = process.env.PORT || 5000;


chefsData=require('./Data/chefD.json');

app.use(cors())


app.get('/',(req,res)=>{
    res.send('Dragon is running')
});

app.get('/chefsdata',(req,res)=>{
    res.send(chefsData);
});

app.get('/chefsdata/:id', (req, res) => {
    const chefId = parseInt(req.params.id);
    const chef = chefsData.find(c => c.id === chefId);
    if (!chef) {
      res.status(404).send('Chef not found');
    } else {
      res.send(chef);
    }
  });


app.listen(port,()=>{
    console.log(`Dragon API is running on port: ${port}`)
})