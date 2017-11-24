const graphQL = require('graphql');
const graphQLLanguage = require('graphql/language');
const db = require('./db');
const config = require("./config");

/*const getPromisified = function(url){
    return new Promise( (resolve, reject) => {
        const lib = url.startsWith('https') ? require('https') : require('http');
        const request = lib.get(url, (response) => {
            // handle http errors
            if (response.statusCode < 200 || response.statusCode > 299) {
               reject(new Error('Failed to load page, status code: ' + response.statusCode));
             }
            // temporary data holder
            const body = [];
            // on every content chunk, push it to the data array
            response.on('data', (chunk) => body.push(chunk));
            // we are done, resolve promise with those joined chunks
            response.on('end', () => resolve(body.join('')));
          });
          // handle connection errors of the request
          request.on('error', (err) => reject(err))
    })
}*/

module.exports= {
    Query: {
        Randos: () => db.randos,
        Massifs: () => db.massifs,
        Cotations: () => db.cotations,
        Rando: (_, { id }) => db.randos.find(rando => rando.id == id)
    },
    Mutation: {
        addPassageToRando(_, { IDRando, passage }){
            let rando = db.randos.find(rando => rando.id == IDRando)
            console.log("idRando", IDRando)
            console.log(rando)
            if(rando){
                passage.id = rando.passages.length
                rando.passages.push(passage)
                console.log(passage);
            }else{
                console.error("Rando n° " + IDRando + " non trouvée")
            }
        }, 
        removePassageFromRando(_, { IDRando, IDPassage }){
            let rando = db.randos.find(rando => rando.id == IDRando)

            if(rando){
                let passage = rando.passages.find(passage => passage.id = IDPassage)
                if(passage){
                    let indexOfPassage = rando.passages.indexOf(passage);
                    if(indexOfPassage){
                        rando.passages.splice(rando.passages.indexOf(passage), 1)
                        console.log("Passage supprimé")
                    }else{
                        console.error("Index of passage non trouvée")
                    }
                }else{
                    console.error("Passage n°"+ IDPassage + " non trouvée")
                }
            }else{
                console.error("Rando n° " + IDRando + " non trouvée")
            }
        } 
    },
    Rando: {
        total_duration: (_, { }) => _.climb_duration + _.descent_duration,
        cotation: (_, { id }) => db.cotations.find(cotation => _.cotation == cotation.id),
        massif: (_, { id }) => db.massifs.find(massif => _.massif == massif.id),
        /*weather: (_, { }) => getPromisified("https://api.openweathermap.org/data/2.5/weather?id=6442816&APPID=" + config.OpenWeatherAPIKey)
                        .then(function(data){
                            return {
                                main: data.weather.main,
                                description: data.weather.description,
                                temperature: ((data.main.temp - 32) * (5/9)), // Conversion de F° en C°
                                humidity: data.main.humidity,
                                wind: data.wind
                            }    
                        }
            ).catch(function(err){
                console.log(err)
            })*/
    },
    Passage: {
        duration: ( _, {} ) => _.arrival_hour - _.departure_hour
    },
    Date: new graphQL.GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
          return new Date(value); // value from the client
        },
        serialize(value) {
          return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            return parseInt(ast.value, 10); // ast value is always in string format
          return null;
        },
    })
}