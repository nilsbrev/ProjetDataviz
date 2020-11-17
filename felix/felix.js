/** Mettez votre script d3 ici en important les fonctions dont vous avez besoin **/



/* global d3, topojson */
//const coordonates = {"language":"french","lat":10,"long":10};

async function getLyricsLanguagesStats() {
    // async, await, then servent à forcer le synchronisme (par défaut js asynchrone)
    let response = await fetch("https://wasabi.i3s.unice.fr/api/v1/song/lyrics/language/popularity")
    let data = await response.json()
    /*
    for(i=0; i<= data.length; i++){
        //for(j=0; j<= coordonates.length; j++){
            if(data._id === "english"){ //coordonates.language
                data[i].
                //data.["long"] = 10;
            }
        //}
    }*/
    return data;
}
getLyricsLanguagesStats().then(data => console.log(data)); 

const data = getLyricsLanguagesStats();

const width = 900, height = 600;

const svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height);

const projection = d3.geoMercator().scale(140)
    .translate([width / 2, height / 1.4]);
const path = d3.geoPath(projection);

const g = svg.append('g');
       
//draw the map 
d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then(data => {
        const countries = topojson.feature(data, data.objects.countries);
        g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path).attr('fill', 'grey');
    });
/*
svg.append("g")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(data){
            return projection(10,10)[0];
        })
        .attr("cy", function(data){
            return projection(10,10)[1];
        })
            .attr("r", 10).attr('fill', 'black');
 


// https://youtu.be/I8BOmODQaMg?t=696 --> afficher */