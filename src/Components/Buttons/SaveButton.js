// React Improt 
import React, { Component } from 'react';

// Component Imports
import SaveTeam from './SaveTeam';

// Dependencies 
import axios from 'axios';

class saveButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
        }
        this.handleChange = this.handleChange.bind(this);
        this.deleteTeam   = this.deleteTeam.bind(this);
    }

    handleChange(v) {
        console.log(v);
        v.length ? this.setState({ title: v }) : this.setState({ title: this.props.title });
    }

    deleteTeam(v) {
        // console.log(v);
        axios
            .delete(`/api/delete/${v}`)
            .catch(console.log);
    }

    handleUpdate(up) {
        let { title } = this.state;
        let { team, index }  = this.props;
        console.log(index);
        if ( up === true ) {
            return (
                <div>
                    <button
                        onClick={() => this.props.handleUpdate(team, title, this.props.teams, this.props.index)}
                        >UPDATE
                    </button>
                    <button
                        onClick={() => this.deleteTeam(index)} 
                        >DELETE
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button
                        onClick={() => {
                            SaveTeam(team, title);
                            }
                        }   
                        >SAVE
                    </button>
                    <button
                        onClick={this.props.cancel}
                        >CANCEL
                    </button>
                </div>
            )
        }
    }

    render() {
        let { title } = this.state;
        let { update }  = this.props;
        return (
            <div>
                <div className='flex-center'>
                <h1 className='large-title'>
                    Title: {title}
                </h1>
                </div>
                <div className='flex-center'>
                    <input 
                        className='input'
                        type="text" 
                        placeholder='SAVE TITLE'
                        onChange={e => this.handleChange(e.target.value)}
                    />
                    {this.handleUpdate(update)}
                </div>
            </div>
        )
    }
}

export default saveButton;