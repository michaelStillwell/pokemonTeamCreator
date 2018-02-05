// Fourth iteration of this app. 
// Delete still doesn't work correctly
// Update is still finnicky and needs tinkering
// Poor structring, needs to be restructured
// Title doesn't update correctly when left blank
// Needs more styling
// Sloppy coding and scripting, ie need to find a dynamic fix to a problem rather than solve this one
// Poor Variable naming

// React Imports
import React, { Component } from 'react';

// Dependencies
import axios from 'axios';

// Style Imports
import './App.css';

// Component Imports 
import PokeDis from './Pokemon/PokeDis';

class App extends Component {
    constructor() {
        super();

        this.state = {
            poke: [],
        }
    }

    componentDidMount() {
        axios
            .get('/api/pokemon/')
            .then(response => {
                this.setState({ poke: response.data })
            })
            .catch(console.log);
    }

    render() {
        let { poke } = this.state;
        return (
            <div>
                <div>
                    <PokeDis poke={poke} />
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default App;