/**
 * API : https://wasabi.i3s.unice.fr/apidoc/
 * Nota Bene : The API is wrapped with basic js using fetch, thus error handling is not optimal
 **/

// Search - Get songs by awardName
export async function getSongsByAward(awardName) {
    // async, await, then servent à forcer le synchronisme (par défaut js asynchrone)
    let response = await fetch("https://wasabi.i3s.unice.fr/search/award/"+awardName);
    let data = await response.json();
    return data;
}