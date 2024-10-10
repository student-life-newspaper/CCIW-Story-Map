
var map = L.map('map').setView([38.6488, -90.3108], 4.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Define conferences
const conferences = {
    "CCIW": {
        "name": "College Conference of Illinois and Wisconsin",
        "teams": [
            {
                "name": "Elmhurst University",
                "location": [41.897463, -87.947758],
                "logo": "img/elmhurst.png"
            },
            {
                "name": "North Central College (IL)",
                "location": [41.7727, -88.1440],
                "logo": "img/northern-central-college.png"
            },
            {
                "name": "Augustana College (IL)",
                "location": [41.5030, -90.5514],
                "logo": "img/augustana-college.png"
            },
            {
                "name": "Carroll University",
                "location": [43.0043, -88.2285],
                "logo": "img/carroll-university.png"
            },
            {
                "name": "Illinois Wesleyan University",
                "location": [40.4909, -88.9907],
                "logo": "img/illinois-wesleyan-university.png"
            },
            {
                "name": "Millikin University",
                "location": [39.843868, -88.974050],
                "logo": "img/millikin-university.png"
            },
            {
                "name": "Carthage College",
                "location": [42.623485, -87.822313],
                "logo": "img/carthage.png"
            },
            {
                "name": "North Park University",
                "location": [41.974831, -87.711185],
                "logo": "img/north-park.png"
            },
            {
                "name": "Wheaton College",
                "location": [41.867425, -88.096246],
                "logo": "img/wheaton.png"
            }
        ]
    },
    "ARC": {
        "name": "American Rivers Conference",
        "teams": [
            {
                "name": "Buena Vista University",
                "location": [42.639007, -95.209059],
                "logo": "img/buena-vista.png"
            },
            {
                "name": "Central College",
                "location": [41.404763, -92.928142],
                "logo": "img/central-college.png"
            },
            {
                "name": "Coe College",
                "location": [41.991080, -91.656984],
                "logo": "img/coe.png"
            },
            {
                "name": "Loros College",
                "location": [42.505165, -90.680837],
                "logo": "img/loros.png"
            },
            {
                "name": "Luther College",
                "location": [43.312086, -91.807514],
                "logo": "img/luther-college.png"
            },
            {
                "name": "Nebraska Wesleyan University",
                "location": [40.838347, -96.644977],
                "logo": "img/nebraska-wesleyan.png"
            },
            {
                "name": "Simpson College",
                "location": [41.364171, -93.565669],
                "logo": "img/simpson-college.png"
            },
            {
                "name": "Dubuque University",
                "location": [42.495094, -90.696439],
                "logo": "img/dubuque.png"
            },
            {
                "name": "Wartburg College",
                "location": [42.729444, -92.483630],
                "logo": "img/wartburg.png"
            }
        ]
    },
    "HCAC": {
        "name": "Heartland Collegiate Athletic Conference",
        "teams": [
            {
                "name": "Anderson University",
                "location": [40.116210, -85.661146],
                "logo": "img/anderson.png"
            },
            {
                "name": "Bluffton University",
                "location": [40.898807, -83.900897],
                "logo": "img/bluffton.png"
            },
            {
                "name": "Franklin College",
                "location": [39.476932, -86.045844],
                "logo": "img/franklin-college.png"
            },
            {
                "name": "Hanover College",
                "location": [38.718557, -85.464081],
                "logo": "img/hanover.png"
            },
            {
                "name": "Manchester University",
                "location": [41.010468, -85.756987],
                "logo": "img/manchester.png"
            },
            {
                "name": "Mount St. Joseph University",
                "location": [39.094069, -84.634663],
                "logo": "img/MSJ.png"
            },
            {
                "name": "Rose-Hulman Institute of Technology",
                "location": [39.485407, -87.325498],
                "logo": "img/rose-hulman.png"
            }
        ]
    },
    "MWC": {
        "name": "Midwest Conference",
        "teams": [
            {
                "name": "Beloit College",
                "location": [42.502878, -89.030906],
                "logo": "img/beloit.png"
            },
            {
                "name": "Cornell College",
                "location": [41.928800, -91.427583],
                "logo": "img/cornell.png"
            },
            {
                "name": "Grinnell College",
                "location": [41.754994, -92.719007],
                "logo": "img/grinnell.svg"
            },
            {
                "name": "Illinois College",
                "location": [39.727721, -90.246182],
                "logo": "img/illinois-college.png"
            },
            {
                "name": "Knox College",
                "location": [40.940673, -90.370513],
                "logo": "img/knox.png"
            },
            {
                "name": "Lake Forest College",
                "location": [42.243131, -87.828847],
                "logo": "img/lake-forest.png"
            },
            {
                "name": "Lawrence University",
                "location": [44.260946, -88.398517],
                "logo": "img/lawrence.png"
            },
            {
                "name": "Monmouth College",
                "location": [40.915928, -90.637661],
                "logo": "img/monmouth.png"
            },
            {
                "name": "Ripon College",
                "location": [43.840965, -88.852970],
                "logo": "img/ripon.png"
            },
            {
                "name": "University of Chicago",
                "location": [41.794006, -87.604831],
                "logo": "img/uchicago.png"
            }
        ]
    },
    "NACC": {
        "name": "Northern Athletics Collegiate Conference",
        "teams": [
            {
                "name": "Aurora University",
                "location": [41.754385, -88.351398],
                "logo": "img/aurora.png"
            },
            {
                "name": "Benedictine University",
                "location": [41.778899, -88.098800],
                "logo": "img/benedictine.png"
            },
            {
                "name": "Concordia University Chicago",
                "location": [41.900472, -87.810727],
                "logo": "img/concordia-chicago.png"
            },
            {
                "name": "Concordia University Wisconsin",
                "location": [43.256045, -87.917364],
                "logo": "img/concordia-wisconsin.png"
            },
            {
                "name": "Eureka College",
                "location": [40.713841, -89.262051],
                "logo": "img/eureka.png"
            },
            {
                "name": "Lakeland University",
                "location": [43.843494, -87.887568],
                "logo": "img/lakeland.png"
            },
            {
                "name": "Rockford University",
                "location": [42.267108, -89.017177],
                "logo": "img/rockford.png"
            },
            {
                "name": "St. Norbert College",
                "location": [44.441962, -88.080233],
                "logo": "img/st-norbert.png"
            },
            {
                "name": "Wisconsin Lutheran College",
                "location": [43.032601, -88.016125],
                "logo": "img/wisconsin-lutheran.png"
            }
        ]
        },
    "SAA": {
        "name": "Southern Athletic Association",
        "teams": [
            {
                "name": "Berry College",
                "location": [34.284887, -85.184386],
                "logo": "img/berry.png"
            },
            {
                "name": "Centre College",
                "location": [37.642624, -84.779844],
                "logo": "img/centre.png"
            },
            {
                "name": "Hendrix College",
                "location": [35.100161, -92.436494],
                "logo": "img/hendrix.png"
            },
            {
                "name": "Millsaps College",
                "location": [32.323532, -90.180849],
                "logo": "img/millsaps.png"
            },
            {
                "name": "Oglethorpe University",
                "location": [33.874411, -84.334937],
                "logo": "img/oglethorpe.png"
            },
            {
                "name": "Rhodes College",
                "location": [35.157570, -89.989533],
                "logo": "img/rhodes.png"
            },
            {
                "name": "Sewanee: The University of the South",
                "location": [35.205024, -85.917595],
                "logo": "img/sewanee.png"
            },
            {
                "name": "Trinity University",
                "location": [29.460601, -98.483762],
                "logo": "img/trinity.png"
            },
            {
                "name": "Southwestern University",
                "location": [30.636922, -97.658378],
                "logo": "img/southwestern.png"
            },
            {
                "name": "Maryville College",
                "location": [35.749719, -83.961943],
                "logo": "img/maryville.png"
            }
        ]
        },
    "UMAC": {
        "name": "Upper Midwest Athletic Conference",
        "teams": [
            {
                "name": "Crown College",
                "location": [44.882668, -93.742268],
                "logo": "img/crown-college.png"
            },
            {
                "name": "Martin Luther College",
                "location": [44.303204, -94.471167],
                "logo": "img/martin-luther.png"
            },
            {
                "name": "Minnesota Morris",
                "location": [45.586449, -95.898651],
                "logo": "img/minnesota-morris.png"
            },
            {
                "name": "Greenville University",
                "location": [38.893563, -89.408810],
                "logo": "img/greenville.png"
            },
            {
                "name": "Westminster College",
                "location": [38.849120, -91.958887],
                "logo": "img/westminster-college.png"
            }
        ]
        }
}


//  Add conference markers to map such that each conference has its own layer and the logo is used as a the maerker for a point


// Add permanent washu marker
L.marker([38.6488, -90.3108], {
    icon: L.icon({
        iconUrl: "img/washu.png",
        iconSize: [40, 40]
    })
}).bindPopup("Washington University in St. Louis").addTo(map);



// Loop through conferences

var conferenceLayers = {};

for (var conference in conferences) {
    var conferenceLayer = L.layerGroup();
    conferences[conference].teams.forEach(function(team) {
        L.marker(team.location, {
            icon: L.icon({
                iconUrl: team.logo,
                iconSize: [40, 40]
            })
        }).bindPopup(team.name).addTo(conferenceLayer);
    });
    conferenceLayers[conference] = conferenceLayer;
    conferenceLayer.addTo(map);
}

L.control.layers(null, conferenceLayers).addTo(map);


// Force the layers control to always be expanded
var layerControlContainer = document.querySelector('.leaflet-control-layers');
layerControlContainer.classList.add('leaflet-control-layers-expanded');
