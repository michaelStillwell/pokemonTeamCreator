// Fourth iteration of this app. 
// Delete still doesn't work correctly
// Update is still finnicky and needs tinkering
// Poor structring, needs to be restructured
// Title doesn't update correctly when left blank
// Needs more styling
// Sloppy coding and scripting, ie need to find a dynamic fix to a problem rather than solve this one
// Poor Variable naming

// Module not found error? 

// React Imports
import React, { Component } from 'react';

// Dependencies
import axios from 'axios';

// Style Imports
import './App.css';

// Component Imports 
import Buttons from './Buttons/Buttons';
import Button_Current from './Buttons/Button_Current';

class App extends Component {
    constructor() {
        super();

        this.state = {
            poke: [],
            teams: ['a', 'b', 'e'],
            currentTeam: [],
            currentTitle: '',
            update: false,
        }
        // App Functions
        this.addToTeam = this.addToTeam.bind(this);
    }

    componentDidMount() {
        axios
            .get('/api/pokemon/')
            .then(response => {
                this.setState({ poke: response.data })
            })
            .catch(console.log);
        // axios
        //     .get('/api/teams')
        //     .then(response => {
        //         this.setState({ teams: response.data })
        //     })
        //     .catch(err => console.log(err));
    }

    addToTeam(val) {
        let t = this.state.currentTeam.slice();

        !t.includes(val) && t.length < 6 
        ? t.push(val) 
        : t; 

        this.setState({ currentTeam: t });
        console.log(this.state.currentTeam)
    }

    render() {
        // Variable Props
        let { 
            poke, 
            teams, 
            currentTeam, 
            currentTitle, 
            update 
        } = this.state;

        return (
            <div>
                <div>
                    <Buttons 
                        poke={poke}
                        currentTeam={currentTeam}
                        addToTeam={this.addToTeam}
                    />
                {/* {
                    poke.map(x => {
                        return <button key={x}>
                            {x}
                        </button>
                    }) 
                }
                {
                    this.state.teams.map(x => {
                        return <button key={x}>
                            {x}
                        </button>
                    })
                } */}
                </div>
            </div>
        )
    }
}

export default App;