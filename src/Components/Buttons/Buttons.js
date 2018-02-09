// React Imports
import React, { Component } from 'react';

// Components
import Button_Poke from './Button_Poke';
import Button_Current from './Button_Current';

class Buttons extends Component {
    render() {
        let { poke, currentTeam, addToTeam } = this.props;
        return (
            <div>
                <Button_Current 
                    currentTeam={currentTeam}
                />
                <Button_Poke 
                    poke={poke} 
                    addToTeam={addToTeam}
                />
            </div>
        )
    }
}

export default Buttons;