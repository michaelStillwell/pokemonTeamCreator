// Dependencies
import axios from 'axios';

const SaveTeam = (team, title) => {
    if ( team.length === 6 ) {
        let t;
        if ( title.length ) {
            t = { [title]: team };
        } else {
            let n = Math.floor((Math.random() * 10) * (Math.random() * 10));
            t = { [n]: team };
        }

        axios
            .post('/api/post', t)
            .then(response => {
                alert('Team saved!');
            })
            .catch(console.log)
    } else {
        alert('You need six mons to save!');
    }
}

export default SaveTeam;