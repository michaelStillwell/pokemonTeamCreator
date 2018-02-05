const { poke } = require('./poke_controller');
let teams = [];

const read = (req, res, next) => {
    res.json(poke);
    console.log('Read for Poke request completed.')
}

const readTeams = (req, res, next) => {
    res.json(teams);
    console.log('Read for Teams request completed.')
}

const create = (req, res, next) => {
    let incoming = req.body;
    let num;
    teams.push(incoming);
    num = teams.indexOf(incoming);
    incoming.id = num;
    res.json(teams);
    // console.log(req.body);
    console.log(teams);
    console.log('Create request completed.')
}

const update = (req, res, next) => {
    let body = req.body;
    console.log(body);
    teams = teams.map(x => x.id !== body.id ? x = x : x = body );
    res.json(teams);
    console.log('Update request completed.')
}

const destroy = (req, res, next) => {
    let { id } = req.params;
    let num = 0;
    for ( let x = 0; x < teams.length; x++ ) {
        if ( teams[x].id === id ) {
            num = teams.indexOf(teams[x]);
        }
    }
    console.log(num)
    teams.splice(num, 1);
    // teams = teams.map(x => x.id === id ? teams[x].splice(x) : x);
    // teams = teams.filter(x => x.id === id );
    res.json(teams);
    console.log(id);
    console.log('Delete request completed.');
}

module.exports = {
    read,
    readTeams,
    create,
    update,
    destroy
};