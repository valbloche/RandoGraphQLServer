module.exports = {
    cotations:[
        {
            id:1,
            label:'T1',
            short_description:"Randonnée",
            long_description:"Sentier bien tracé. Terrain plat ou en faible pente, pas de risques de chute. Exigences : Aucune, convient aussi pour baskets. L'orientation ne pose pas de problèmes, en général possible même sans carte."
        },
        {
            id:2,
            label:'T2',
            short_description:"Randonnée en montagne",
            long_description:"Sentier avec tracé ininterrompu. Terrain parfois raide, risques de chute pas exclus. Exigences : Avoir le pied assez sûr. Chaussures de trekking recommandées. Capacités élémentaires d'orientation."
        },
        {
            id:3,
            label:'T3',
            short_description:"Randonnée en montagne exigeante",
            long_description:"Sentier pas forcément visible partout. Les passages exposés peuvent être équipés de cordes ou de chaînes. Eventuellement appui des mains nécessaire pour l'équilibre. Quelques passages exposés avec risques de chute, pierriers, pentes mêlées de rochers sans trace. Exigences : Avoir le pied très sûr. Bonnes chaussures de trekking. Capacités d'orientation dans la moyenne. Expérience élémentaire de la montagne souhaitable."
        },
        {
            id:4,
            label:'T4',
            short_description:"Randonnée alpine",
            long_description:"Traces parfois manquantes. L'aide des mains est quelquefois nécessaire pour la progression. Terrain déjà assez exposé, pentes herbeuses délicates, pentes mêlées de rochers, névés faciles et passages sur glacier non recouverts de neige. Exigences : Etre familier du terrain exposé. Chaussures de trekking rigides. Une certaine capacité d'évaluation du terrain et une bonne capacité d'orientation. Expérience alpine. En cas de mauvais temps le repli peut s'avérer difficile."
        },
        {
            id:5,
            label:'T5',
            short_description:"Randonnée alpine exigeante",
            long_description:"Pentes < 35°. Raide. Courts passages raides et/ou traversées de pentes et/ou barres rocheuses. Glacier. Danger d'avalanche. Risque de chute. Risque de chute en crevasse. Dangers alpins. Exigences : Bonnes connaissances de l'évaluation de la situation en matière d'avalanches. Bonnes connaissances alpines. Sûreté du pas."
        },
        {
            id:6,
            label:'T6',
            short_description:"Randonnée alpine difficile",
            long_description:"La plupart du temps sans traces, passages d'escalade jusqu'au 2. En général non balisé. Souvent très exposé. Pentes mêlées de rochers délicates. Glaciers avec risque accru de glissade. Exigences : Excellente capacité d'orientation. Expérience alpine confirmée et habitude de l'utilisation du matériel technique d'alpinisme."
        }
    ],
    massifs:[
        {
            id:1,
            name:'Bauges',
            description:"Bauges"
        },
        {
            id:2,
            name:'Chartreuse',
            description:"Chartreuse"
        },
        {
            id:3,
            name:'Belledone',
            description:"Belledone"
        },
        {
            id:4,
            name:'Maurienne',
            description:"Maurienne"
        },
        {
            id:5,
            name:'Tarentaise',
            description:"Maurienne"
        },
        {
            id:6,
            name:'Aravis',
            description:"Aravis"
        },
        {
            id:7,
            name:'Vanoise',
            description:"Vanoise"
        }
    ],
    randos:[
        {
            id:1,
            name:'Passage du plan Molard',
            denivele:800,
            climb_duration:120,
            descent_duration:120,
            cotation:2,
            massif:1
        },
        {
            id:2,
            name:'Mont Granier',
            denivele:1000,
            climb_duration:150,
            descent_duration:90,
            cotation:3,
            massif:2
        },
        {
            id:3,
            name:'Chamechaude',
            denivele:1200,
            climb_duration:180,
            descent_duration:100,
            cotation:3,
            massif:2
        },
        {
            id:4,
            name:"Chalets d'Armenaz",
            denivele:1100,
            climb_duration:180,
            descent_duration:100,
            cotation:2,
            massif:1
        },
        {
            id:5,
            name:"Mont Colombier par les crêtes",
            denivele:1200,
            climb_duration:160,
            descent_duration:80,
            cotation:3,
            massif:1
        },
        {
            id:6,
            name:"Dent des portes",
            denivele:700,
            climb_duration:100,
            descent_duration:60,
            cotation:2,
            massif:1
        },
        {
            id:7,
            name:"Mont Pécloz",
            denivele:1200,
            climb_duration:140,
            descent_duration:90,
            cotation:2,
            massif:1
        },
        {
            id:8,
            name:"Super collet d'Allevard",
            denivele:600,
            climb_duration:100,
            descent_duration:50,
            cotation:1,
            massif:3
        },
        {
            id:9,
            name:"Refuge des 7 laux - Lac Cottepens",
            denivele:1100,
            climb_duration:150,
            descent_duration:110,
            cotation:2,
            massif:3
        },
        {
            id:10,
            name:"Lac de Peyre",
            denivele:500,
            climb_duration:70,
            descent_duration:40,
            cotation:1,
            massif:6
        },
        {
            id:10,
            name:"Le petit Bargy",
            denivele:800,
            climb_duration:130,
            descent_duration:100,
            cotation:2,
            massif:6
        },
        {
            id:11,
            name:"Rocher du Vent",
            denivele:500,
            climb_duration:90,
            descent_duration:40,
            cotation:1,
            massif:5
        }
    ]
}