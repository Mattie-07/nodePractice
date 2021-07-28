const express = require("express")
const router = express.Router();
let dataFile = require("../data/data.json")

let albumInfo = dataFile.albums;
router.get('/albums', (req, res) =>{
    let albumSummary = [];
    let albumPhoto = [];
    let albumName = [];
    let albumTracks = [];
    let albumPeak = [];
    albumInfo.forEach(element =>{
        albumSummary = albumSummary.concat(element.summary)
    })
    albumInfo.forEach(element =>{
        albumPhoto = albumPhoto.concat(element.artwork)
    })
    albumInfo.forEach(element =>{
        albumName = albumName.concat(element.albumname)
    })
    albumInfo.forEach(element =>{
        albumTracks = albumTracks.concat(element.tracklist)
    })
    albumInfo.forEach(element =>{
        albumPeak = albumPeak.concat(element.peakPositionBillBoard)
    })
    res.render("albums", {
        summary: albumSummary,
        coverPhoto: albumPhoto,
        nameOfAlbum: albumName,
        tracks: albumTracks,
        peakPosition: albumPeak,
    })    
})
module.exports = router;