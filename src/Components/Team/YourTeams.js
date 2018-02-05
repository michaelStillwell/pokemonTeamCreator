// React Imports
import React, { Component } from 'react';

// Dependencies 
import axios from 'axios';

// Component Imports
import SaveButton from '../Buttons/SaveButton';

class YourTeams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [],
        }
        this.GetYourTeams = this.GetYourTeams.bind(this);
    }

    GetYourTeams() {
        axios
            .get('/api/teams')
            .then(response => {
                this.setState({ teams: response.data });
            })
            .catch(console.log);
    }

    handleUpdate(team, title, teams) {
        // let { index } = this.props;
        let t;
        if ( team.length === 6 ) {
            t = { [title]: team, id: 0 };
    
            axios
                .put('/api/update', t)
                .catch(console.log)
        } else {
            alert('Need 6 mons to update!');
        }
    }

    render() {
        let { teams } = this.state;
        let { team, update, title, index } = this.props;
        console.log(this.state.teams)
        return (
            <div>
                <div>
                    <div className='flex-center'>
                    <h1
                        className='large-title'
                        >YOUR TEAMS:
                    </h1>
                    </div>
                    <div className='flex-center'>
                    <button
                        onClick={() => this.GetYourTeams()}
                        >Get Your Teams
                    </button>
                    </div>
                <div className='flex-center'>
                {
                    teams.map(x => {
                        return (
                            <button
                                className='background-red'
                                id={x.id} 
                                key={x.id}
                                onClick={e => {
                                    alert(x.id);
                                    let d = x.id;
                                    this.props.updateTeam(e.target.id, teams, d);
                                }}
                                >{Object.getOwnPropertyNames(x).shift()}
                            </button>
                        )
                    })
                }
                </div>
                </div>
                <SaveButton 
                    team={team} 
                    update={update} 
                    title={title}
                    teams={teams}
                    index={index}
                    handleUpdate={this.handleUpdate} />
            </div>
        )
    }
}

export default YourTeams;