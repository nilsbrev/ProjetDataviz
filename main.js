
// Search - Get songs by awardName

async function getSongsByAward(awardName) {
    // async, await, then servent à forcer le synchronisme (par défaut js asynchrone)
    let response = await fetch("https://wasabi.i3s.unice.fr/search/award/"+awardName)
    let data = await response.json()
    return data;
}
getSongsByAward("Platinum").then(data => console.log(data));