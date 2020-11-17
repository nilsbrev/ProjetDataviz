

// Print content in a p div (testing purpose)
function populatePara(content) {
    let myPara = document.createElement('p');
    myPara.textContent = content;
    document.querySelector('body').appendChild(myPara);
}

async function getAlbumsTitlesByAward(awardName,filter){
    getSongsByAward(awardName).then(data => {
            for (var i = 0; i < data.length; i++) {
                var res = data[i];
                // testing purpose
                populatePara(res[filter])
                console.log(res[filter])
            }
        }
    )

}

// Loop over a list of json objects and return a value filtered with key
async function loopPayload(jsonPayload,filter) {
    for (var i = 0; i < jsonPayload.length; i++) {
        var res = jsonPayload[i];
        populatePara(res[filter])
        console.log(res[filter])
    }
}

async function main(){
    //getSongsByAward("Platinum").then(data => console.log(data));
//rund3(getSongsByAward("Platinum"))
// getAlbumsTitlesByAward(awardName)
    getAlbumsTitlesByAward("Platinum","albumTitle");
}

main()