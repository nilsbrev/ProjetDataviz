import {getSongInfoWithId, getSongsByAward} from "./apiwrapper.mjs";
import { populatePara } from "./testing.mjs";

/** Functions which extract and transform payloads into a clean dataset for d3 **/

// Get a list of albums title from API call (Strings)
export async function getSongsIdWithAward(awardName, filter){
    getSongsByAward(awardName).then(data => {
            for (let i = 0; i < data.length; i++) {
                let res = data[i];
                // testing purpose
                getSongInfoWithId(res[filter]).then(payload => {
                    populatePara(payload['producer'])
                })

            }
        }
    )

}