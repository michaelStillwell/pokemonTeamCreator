// React Import
import React, { Component } from 'react';

class Button_Poke extends Component {
    render() {
        let { poke, addToTeam } = this.props;
        return (
            <div>
                <h2
                    >Pokes
                </h2>
                {/* {this.pokes()}/ */}
                {poke.map(x => {
                    return (
                        <button
                            key={x}
                            onClick={() => addToTeam(x)}
                            >{x}
                        </button>
                    )
                })}
            </div>
        )
    }
}

export default Button_Poke;