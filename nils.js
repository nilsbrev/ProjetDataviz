import { getAlbumsTitlesByAward } from "./modules/fetchdata.mjs";

async function nils(){
    //getSongsByAward("Platinum").then(data => console.log(data));
//rund3(getSongsByAward("Platinum"))
// getAlbumsTitlesByAward(awardName)
    getAlbumsTitlesByAward("Platinum","albumTitle");
}

nils()