import React from 'react'
//import fonts/play,pause buttons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

export class Controls extends React.Component {
    render() {
        return (
            //controls for play pause and skip
            <div className="c-player--controls">
                <button className="skip-btn" onClick={() => this.props.SkipSong(false)}>
                    {/* importedfonts */}
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="play-btn" onClick={() => this.props.setIsPlaying(!this.props.isPlaying)}>
                    <FontAwesomeIcon icon={this.props.isPlaying ? faPause : faPlay} />
                </button>
                <button className="skip-btn" onClick={() => this.props.SkipSong()}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
            </div>
        );  
    }
}