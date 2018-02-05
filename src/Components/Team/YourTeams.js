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
        let { kin } = this.state;
        let { index } = this.props;
        axios
            .get('/api/teams')
            .then(response => {
                this.setState({ teams: response.data });
                this.setState({ kin: index });
            })
            .catch(console.log);
    }

    handleUpdate(team, title, teams, index) {
        let t;
        if ( team.length === 6 ) {
            t = { [title]: team, id: index };
    
            axios
                .put('/api/update', { [title]: team, id: index })
                .catch(console.log)
        } else {
            alert('Need 6 mons to update!');
        }
    }

    render() {
        let { teams } = this.state;
        let { team, update, title, index } = this.props;
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
                    handleUpdate={this.handleUpdate}
                    cancel={this.props.cancel}
                />
            </div>
        )
    }
}

export default YourTeams;