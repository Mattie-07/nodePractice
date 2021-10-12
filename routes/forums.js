const express = require("express");
const router = express.Router();
router.use(express.urlencoded({extended:false}));
router.use(express.json());
let photoRef = require("../data/data.json")
let refToPhotos = photoRef.artwork;

router.get("/forums", (req, res) => {
    let photos = [];
    refToPhotos.forEach(element =>{
        photos = photos.concat(element.art);
    })
    res.render('forums',{
        photo:photos
    })
});

router.post('/forums', (req, res) => {

    //req.body
    // res.send('data')

    res.status(200).json({name: req.body.name, message: req.body.message})
})

module.exports = router;
