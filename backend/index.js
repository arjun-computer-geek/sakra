const express = require ('express');
const app = express();
app.get('/', (req, res)=> {
    res.send("Hey worked..")
})
app.listen(8000, ()=> {
    console.log('app started')
})