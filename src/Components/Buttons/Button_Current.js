// React Imports
import React, { Component } from 'react';
import { currentId } from 'async_hooks';

class Button_Current extends Component {
    render() {
        let { currentTeam } = this.props;
        return (
            <div>
                <h1>Team</h1>
                <ul>
                    {currentTeam.map(x => {
                        return (
                            <li
                                id={x}
                                key={x}>
                                <button
                                    onClick={() => {
                                        currentT/eam.splice(currentTeam.indexOf(x), 1)
                                        document.getElementById(x).style.display = 'none';
                                    }}
                                    >{x}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Button_Current;