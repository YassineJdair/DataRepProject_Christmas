//combines two operations
import React from 'react';
import { SongItem } from './songItem';

export class Songs extends React.Component{

    render() {
        //class property // .songs collection of songs //special map fucntion to break them up into individual songs
        return this.props.songs.map((song) => {
            return <SongItem movie={song} ReloadData= {this.props.ReloadData}></SongItem>
        })
    }

}