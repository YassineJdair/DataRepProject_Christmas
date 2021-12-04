//combines two operations
import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class SongItem extends React.Component {

    //constructor to bind
    constructor() {
        super();

        this.DeleteSong = this.DeleteSong.bind(this);

    }

    //delete song method that logs to console
    DeleteSong(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.song._id);

        //axios calls delete method and calls http url
        axios.delete("http://localhost:4000/api/songs/" + this.props.song._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }


    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page
            <div>
                {/* //Card Header from bootstrap makes app look neater */}
                <Card>
                    <Card.Header>{this.props.song.artist}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.song.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.song.genre}</p>
                                <p>{this.props.song.title}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* link helps change url of application */}
                    <Link to={"/update/" + this.props.song._id} className='btn btn-primary'>Update Song</Link>
                    {/* red delete button, goes to server and envokes route point */}
                    <Button variant="danger" onClick={this.DeleteSong}>Delete Song</Button>
                </Card>





            </div>
        );
    }

}