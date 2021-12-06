//combines two operations
import React from 'react';

export class Content extends React.Component {

    render() {
         //returns some text and local time
        return (
              //div is used in HTML to make divisions of content in the web page
            <div>
                <h1>Welcome to TopCharts!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }

}
