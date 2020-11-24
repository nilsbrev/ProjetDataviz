import { getSongsIdWithAward } from "../modules/fetchdata.mjs";

async function main(){
    //getSongsByAward("Platinum").then(data => console.log(data));
//rund3(getSongsByAward("Platinum"))
// getSongsIdWithAward(awardName)
    await getSongsIdWithAward("Platinum","_id");
}

main()