// React Imports
import React from 'react';

// const displayTeam = a => a.map((x, y) => <li key={y}>{x}</li>);

const displayTeam = a => a.map(x => {
    return (
        <div key={x} id={x}>
            <li className='flex-right'>
            <button
                className='onHover-changeColor'
                onClick={() => {
                    a.splice(a.indexOf(x), 1);
                    document.getElementById(x).style.display = 'none';
                    console.log(a);
                }}
                >{x}
            </button>
            </li>
        </div>
    )
});

export default displayTeam;