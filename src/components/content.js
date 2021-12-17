//combines two operations
import React from 'react';
import { Register } from './register';
import { Controls } from './controls';
import img1 from '../images/centralcee.jpeg'
import background1 from '../images/background1.jpg'

//image modifications
const divStyle = {
    width: '100%',
    height: '870px',
    backgroundImage: `url(${background1})`,
    backgroundSize: 'fill'
};

//style={{ backgroundImage: `url(${background})`}}
export class Content extends React.Component {

    render() {
        //returns some text and local time
        return (
            //div is used in HTML to make divisions of content in the web page
            <div className="Content" style={divStyle}>
                {/* homepage  */}{/* imports register componenets into homepage*/}
                <object align="top"><b><h7>Please Register Or Log In</h7></b><Register /></object>

                <br></br>
                <br></br>

                <object align="centre"> <h4>Welcome to TopCharts!</h4></object>
                {/* image for "now playing" */}
                <br></br>

                {/* alighn image */}
                <object align="center">
                    <img src={img1}
                        width='15%'
                        height='30%' />
                </object>

                <h6><b>Now Playing:</b> 6 for 6</h6>
                <h6><b>Artist:</b> Central Cee</h6>
                <h6><b>Album:</b> Wild West</h6>
                {/* imports control components into homepage */}
                <Controls />
            </div>

        );
    }

}
