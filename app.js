const express = require('express');
const app = express();
const hbs = require('express-handlebars');
require('dotenv').config();


const port=process.env.PORT || 5000;

app.engine('handlebars',hbs.engine());
app.set('view engine','handlebars');
app.set('views','./views');
// app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})

