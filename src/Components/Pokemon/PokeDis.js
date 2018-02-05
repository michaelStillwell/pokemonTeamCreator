// React Import
import React, { Component } from 'react';

// Component Imports
import YourTeams from '../Team/YourTeams';
import displayTeam from '../Buttons/DisplayTeam';

class PokeDis extends Component {   
    constructor(props) {
        super(props);

        this.state = {
            team: [],
            term: '',
            title: '',
            index: 0,
            update: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.showResults  = this.showResults.bind(this);
        this.addToTeam    = this.addToTeam.bind(this);
        this.updateTeam   = this.updateTeam.bind(this);
        this.cancel       = this.cancel.bind(this);
    }

    handleChange(v) {
        v.length ? this.setState({ term: v }) : this.setState({ term: '' });
    }

    addToTeam(v) {
        let n = this.state.team;
        if ( n.length < 6 ) {
            if ( !n.includes(v) ) {
                n.push(v);
            }
        }
        this.setState({ team: n });
    }

    cancel() {
        this.setState({ team: [], title: '' });
    }

    showResults() {
        let { term } = this.state;
        let { poke } = this.props;
        let base = poke.filter(x => x.includes(term));

        return base.map(x => {
            return (
                <button 
                    className='onHover-changeColor flex-center'
                    onClick={() => this.addToTeam(x)}
                    key={x}
                    id={x}
                    >{x}
                </button>
            )
        })
    }

    updateTeam(v, t, d) {
        let n = t[v][Object.keys(t[v]).shift()];
        let o = t[d].id;
        let l = Object.keys(t[v]).shift();
        this.setState({ team: n, update: true, title: l, index: o });
    }

    render() {
        let { team, update, title, index } = this.state;
        return (
            <div>
                <div className='flex-right'>
                    <input
                        type="text" 
                        placeholder='Search for a mon' 
                        onChange={e => this.handleChange(e.target.value)} 
                    />
                </div>
                <YourTeams 
                    updateTeam={this.updateTeam} 
                    cancel={this.cancel}
                    team={team} 
                    title={title}
                    update={update} 
                    index={index}
                />
                <p
                    className='title flex-center'
                    >Current Team:</p>
                <div className='button-container'>
                {displayTeam(this.state.team)}
                </div>
                <p
                    className='title flex-center'
                    >Pokes:</p>
                <div className='flex-center'>
                    {this.showResults()}
                </div>
            </div>
        )
    }
}

export default PokeDis;