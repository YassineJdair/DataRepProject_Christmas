const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

///Users/yassinejdair/DataRepProject_Christmas/build
//config to send files to browser
app.use(express.static(path.join(__dirname, '../../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//connecting application with mongodb
const myConnectionString = 'mongodb+srv://admin:Yassine12@cluster0.fj0zk.mongodb.net/songs?retryWrites=true&w=majority'

//connectin with mongoose
mongoose.connect(myConnectionString);

//create a new database schema
const Schema = mongoose.Schema;

//generated schema
var songSchema = new Schema({

    title: String,
    artist: String,
    genre: String,
    poster: String

});

//use the schema to create a new "song" database model.
var SongModel = mongoose.model("Song", songSchema);

//route point
app.get('/api/songs', (req, res) => {

    //constant that contains song information
    //  const mysongs = [
    //     {
    //     "Title": "Easy On Me",
    //     "Artist": "Adele",
    //     "Genre": "Pop/Soul",
    //     "Poster": "https://www.billboard.com/wp-content/uploads/media/Adele-2015-Alasdair-McLellan-billboard-650.jpg"
    //     },
    //     {
    //     "Title": "All I Want For Christmas",
    //     "Artist": "Mariah carey",
    //     "Genre": "Pop",
    //     "Poster": "https://i2-prod.irishmirror.ie/incoming/article24386581.ece/ALTERNATES/s615/4_Mariah-Carey-Lights-The-Empire-State-Building-In-Celebration-Of-The-25th-Anniversary-Of-All-I-Want.jpg"
    //     },
    //     {
    //     "Title": "Last Christmas",
    //     "Artist": "Wham",
    //     "Genre": "Pop",
    //     "Poster": "https://lastfm.freetls.fastly.net/i/u/770x0/b5ff772fcfbe7b8571d5cf96e3a77554.jpg"
    //     },
    //     {
    //     "Title": "Flowers",
    //     "Artist": "Arrdee",
    //     "Genre": "British Rap",
    //     "Poster": "https://www.clashmusic.com/sites/default/files/field/image/unnamed-280_84.jpg"
    //     },
    //     {
    //     "Title": "Overseas",
    //     "Artist": "D-Block Eurpoe",
    //     "Genre": "Hip-Hop/Rap",
    //     "Poster": "https://upload.wikimedia.org/wikipedia/commons/1/11/D-Block_Europe.jpg"
    //     },
    //     {
    //     "Title": "Overpass Graffiti",
    //     "Artist": "Ed Sheeran",
    //     "Genre": "Pop",
    //     "Poster": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ed_Sheeran-6826_%28cropped%29.jpg/486px-Ed_Sheeran-6826_%28cropped%29.jpg"
    //     }
    //     ]


    //callback function
    SongModel.find((err, data) => {
        res.json(data);
    })

})

//listens for put request to edit songs
app.put('/api/songs/:id', (req, res) => {
    console.log('Updating Song: ' + req.params.id)

    //interact with database find and update field
    SongModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

//method to delete data// listens for http delete method
app.delete('/api/songs/:id', (req, res) => {
    console.log("Delete Song: " + req.params.id);

    SongModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

//listen for get request
app.get('/api/songs/:id', (req, res) => {
    //function passes id
    console.log(req.params.id);

    //use id to find in database
    SongModel.findById(req.params.id, (err, data) => {
        //send data back
        res.json(data);
    })
})


//listen for post request
app.post('/api/songs', (req, res) => {

    //log console
    console.log('Song Recieved!');
    console.log(req.body.title);
    console.log(req.body.artist);
    console.log(req.body.genre)
    console.log(req.body.poster);

    SongModel.create({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        poster: req.body.poster
    })

    //stop duplicaiton
    res.send('Item Added');

})

//joins paths when file sends// sends front end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../build/index.html'));

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})