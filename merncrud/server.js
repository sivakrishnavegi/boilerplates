const express = require('express');
const app = express() ;

const port = 3000

app.get('/', (req,res)=> {
    res.send("hi you are live !");
})

app.listen(port, () => {
    console.log(`Server started on port${port}`);
});
