const express = require('express');
const app = express();

app.get('/', (req,res)=>{
      res.send("Hello World! Welcome to my awesome 2nd Task of my 2nd stage of my Interview");
});

app.listen(3000, function () {
    console.log(app("app listening on port 3000");
});
