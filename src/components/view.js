//combines two operations
import React from 'react';
import { Songs } from './songs';
import axios from 'axios';

export class View extends React.Component {

    //gets called for delete event
    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    //store data to be used in class
    state = {
        songs: [
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
        ]
    };

    //component life cycle method //gets called when component is active
    componentDidMount() {
        //axios is promise based http client
        axios.get('http://localhost:4000/api/songs')
            //fullfilled state
            .then((response) => {
                this.setState({ songs: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    //gathers songs in database
    ReloadData() {
        //axios is promise based http client
        axios.get('http://localhost:4000/api/songs')
            //fullfilled state
            .then((response) => {
                this.setState({ songs: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }


    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page
            <div>
                <h3>Top Songs</h3>
                {/* jsx */}
                <Songs songs={this.state.songs} ReloadData={this.ReloadData} ></Songs>
            </div>
        );
    }

}