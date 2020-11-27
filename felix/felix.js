/* global d3, topojson */
const countries = ["Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua And Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia And Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic Of The",
    "Cook Islands",
    "Costa Rica",
    "Cote D'ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-bissau",
    "Guyana",
    "Haiti",
    "Heard Island And Mcdonald Islands",
    "Holy See (vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic Of",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic Of",
    "Korea, Republic Of",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia, The Former Yugoslav Republic Of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States Of",
    "Moldova, Republic Of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts And Nevis",
    "Saint Lucia",
    "Saint Pierre And Miquelon",
    "Saint Vincent And The Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome And Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia And The South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard And Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province Of China",
    "Tajikistan",
    "Tanzania, United Republic Of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad And Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks And Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.s.",
    "Wallis And Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

//fonction créant notre JSON de localisations à partir du JSON-BD
function getLocations(data) {
    const locations = new Map();
    //exemple : {country:"France", cpt:564}

    data.forEach(donnee => {
        if (locations.has(donnee.location.country) === false) {
            if (countries.includes(donnee.location.country) !== false)
                locations.set(donnee.location.country, 1);
        } else {
            let cpt = new Number(locations.get(donnee.location.country));
            locations.set(donnee.location.country, cpt + 1);
        }
    });
    return locations;
}

//fonction ajoutant les coordonnées associées au pays 
function getCoord(coord, localisations) {
    //let r = [coord, localisations];
    let dataForMap = [];
    for (const [key, cpt] of localisations) {
        if(cpt > max)
            max = cpt;
        let country = key;
        let compteur = cpt;
        let long = 0;
        let lat = 0;
        coord.ref_country_codes.forEach(coordcountry => {
            if (coordcountry.country === country) {
                long = coordcountry.longitude;
                lat = coordcountry.latitude;
            }
        });

        dataForMap.push({
            country: country,
            cpt: compteur,
            long: long,
            lat: lat
        });
    }
    return dataForMap;
}

let coordonnees = null;
let loc = null;
let max = 0;

//récupération de nos données à l'aide du JSON fourni par le prof 
let donnees = d3.json("wasabi-artist.json", function(data) {
    loc = getLocations(data);
    let coords = d3.json("country-coord.json", function(coord) {
        coordonnees = coord;
        getCoord(coordonnees, getLocations(data));

        let markers = getCoord(coordonnees, loc);

        //récupération du SVG
        var svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height");

        //set des propriétés de la map
        var projection = d3.geoMercator()
            .center([0, 0]) // GPS of location to zoom on
            .scale(150) // This is like the zoom
            .translate([width/2, height/2]);


        //récupération du JSON de la map 
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data) {

            //récupération de la map
            data.features = data.features.filter(function(d) {
                return d;
            });

            //création du tooltip
            var Tooltip = d3.select("#my_dataviz_div")
                .append("div")
                .attr("class", "tooltip")
                .style("opacity", 1)
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "2px")
                .style("border-radius", "1px")
                .style("padding", "5px");

            //Quand on a la souris sur un point, on affiche la div avec les infos 
            var mouseover = function(d) {
                Tooltip.style("opacity", 1);
                //console.log("MOUSEOVER");
            };
            //Quand on bouge la souris sur un point, ca affiche les infos 
            var mousemove = function(d) {
                Tooltip
                    .html(d.country + "<br>" + d.cpt + " artiste(s)") //exemple avec un JSON du type : {name:, long:, lat:}
                    .style("left", (d3.mouse(this)[0] + 10) + "px")
                    .style("top", (d3.mouse(this)[1]) + "px"); //gère la position de la div par rapport à la souris mais c'est éclaté ca marche pas
            };
            //On cache les infos quand on enlève la souris du point
            var mouseleave = function(d) {
                Tooltip.style("opacity", 0);
            };
            
            var mouseclick = function(d) {
                console.log("Country : " + d.country + "\n nombre : " + d.cpt);
            };


            //Dessine la map
            svg.append("g")
                .selectAll("path")
                .data(data.features)
                .enter()
                .append("path")
                .attr("fill", "#b8b8b8")
                .attr("d", d3.geoPath()
                    .projection(projection)
                )
                .style("stroke", "black")
                .style("opacity", .3);

            //Ajoute les points à la map
            svg
                .selectAll("myCircles")
                .data(markers)
                .enter()
                .append("circle")
                .attr("cx", function(d) {
                    return projection([d.long, d.lat])[0];
                }) //axe X
                .attr("cy", function(d) {
                    return projection([d.long, d.lat])[1];
                }) //axe Y
                .attr("r",function(d) {
                    let rayon = 2+(40*(d.cpt/max)); 
                    return rayon;
                }) // rayon adaptatif à prévoir (maybe utiliser les linearscale et compagnie
                .style("fill", "#57b45d")
                .attr("stroke", "#57b45d")
                .attr("stroke-width", 2)
                .attr("fill-opacity", .4)
                .on("mouseover", mouseover)
                .on("mousemove", mousemove) //affiche les données des points sur lesquels on passe la souris 
                .on("mouseleave", mouseleave)
                .on("click", mouseclick);


        });
    });
});
