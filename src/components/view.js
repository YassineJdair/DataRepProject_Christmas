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
        songs: [ ]
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
                <h3>Top Songs of the Week</h3>
                {/* jsx */}
                <Songs songs={this.state.songs} ReloadData={this.ReloadData} ></Songs>
            </div>
        );
    }

}