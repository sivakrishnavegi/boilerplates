const express = require('express');
const dotenv = require('dotenv');   //environvement vairables

const app = express();

dotenv.config({path :'config.env'})    //setting path of config.env file at root dir contains env vars

const PORT = process.env.PORT || 3000

app.get('/', (req,res)=> {
    res.send("hi you are live !");
})

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
