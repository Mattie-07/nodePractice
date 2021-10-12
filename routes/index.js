const express = require('express');
const router = express.Router();
let dataFile = require("../data/data.json")
let data = dataFile.albums;

router.get("/", (req, res) => {                                         
    let photos = [];                                                //creating an array
    data.forEach(element =>{                                        //using a forEach to initalize the array
        photos = photos.concat(element.photo);                      //adding each photo to the arrax
    })
    res.render("index", {
        photo: photos
    });
})
module.exports = router;