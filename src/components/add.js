//combines two operations
import React from 'react';
import axios from 'axios';
import background from '../images/addimg.jpg'

//image modifications
const divStyle = {
    width: '100%',
    height: '880px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
};


export class Add extends React.Component {

    constructor() {
        super();

        //provides the scripts data to be executed whenever the submit event is occurred
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        // used by React to represent information about the components current situation
        this.state = {
            Title: '',
            Artist: '',
            Genre: '',
            Poster: ''
        }
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangeTitle(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Title: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangeArtist(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Artist: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangeGenre(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Genre: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangePoster(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Poster: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onSubmit(e) {
        e.preventDefault();
        alert("Song: " + this.state.Title + " " +
            "Artist: " + this.state.Artist + " " +
            "Genre: " + this.state.Genre + " " +
            "Poster: " + this.state.Poster);

        const newSong = {
            title: this.state.Title,
            genre: this.state.Genre,
            artist: this.state.Artist,
            poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/songs', newSong)

            .then((res) => {
                console.log(res);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    //turns website code into the interactive pages users see
    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page //jsx code
            <div className='App' className="Content" style={divStyle}>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label><b>Add Song Title: </b></label>
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <input type='text'
                            id='input'
                            className='form-control'
                            value={this.state.Title}
                            //onchange attributes fires the moment the value of the element is changed
                            onChange={this.onChangeTitle}
                        />
                    </div>

                    <div className="form,-group">
                        <label><b>Add Song Artist: </b></label>
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <input type='text'
                            className='form-control'
                            value={this.state.Artist}
                            //onchange attributes fires the moment the value of the element is changed
                            onChange={this.onChangeArtist}
                        />
                    </div>

                    <div className="form,-group">
                        <label><b>Add Song Genre: </b></label>
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <input type='text'
                            className='form-control'
                            value={this.state.Genre}
                            //onchange attributes fires the moment the value of the element is changed
                            onChange={this.onChangeGenre}
                        />
                    </div>

                    <div className="form-group">
                        <label><b>Add Artist PNG: </b></label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            //onchange attributes fires the moment the value of the element is changed
                            onChange={this.onChangePoster}
                        />
                    </div>

                    <div className="form-group">
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <input type='submit'
                            value='Add Song'
                            className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}