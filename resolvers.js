const db = require('./db');
module.exports= {
    Query: {
        Randos: () => db.randos,
        Massifs: () => db.massifs,
        Cotations: () => db.cotations,
        Rando: (_, { id }) => db.randos.find(rando => rando.id == id)
    },
    Rando: {
        total_duration: (_, { }) => _.climb_duration + _.descent_duration,
        cotation: (_, { id }) => db.cotations.find(cotation => _.cotation == cotation.id),
        massif: (_, { id }) => db.massifs.find(massif => _.massif == massif.id)
    }
}