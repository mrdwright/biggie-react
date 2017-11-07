import React from 'react';
import { render } from 'react-dom';
import { Chat } from 'botframework-webchat';

import styles from './App.scss';

class App extends React.Component {
    render () {
        return (
            <div>
                <div className="biggie">
                    <Chat directLine={{ secret: '{YOUR_SECRET_HERE}' }} user={{ id: '1', name: 'biggie' }}/>
                </div>
            </div>
        );
    }
}

var div = document.createElement("div");
div.id = 'app';
document.body.appendChild(div);

render(<App/>, document.getElementById('app'));