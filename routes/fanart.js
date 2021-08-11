const express = require('express')
const router = express.Router();
let theFanArt = require("../data/data.json");

let art = theFanArt.artwork;
router.get("/fanart", (req, res) =>{
    let artwork = [];

    art.forEach(element =>{

        artwork = artwork.concat(element.art);
    })
    res.render("fanart", {
        art:artwork
    })
})
module.exports = router;
