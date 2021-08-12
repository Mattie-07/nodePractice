const express = require('express')
const app = express();
app.set("view engine", 'ejs');
app.use(express.static("public"));

//subroutes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/forums'))
app.use(require('./routes/fanart'))


let server = app.listen(2000, () =>{
    console.log("On port 2000");
})



