/** Various functions for testing **/

// Print content in a p div (testing purpose to display the result html side)
async function populatePara(content) {
    let myPara = document.createElement('p');
    myPara.textContent = content;
    document.querySelector('body').appendChild(myPara);
}

// Loop over a list of json objects and return a value filtered with key
async function loopPayload(jsonPayload,filter) {
    for (let i = 0; i < jsonPayload.length; i++) {
        let res = jsonPayload[i];
        populatePara(res[filter])
        console.log(res[filter])
    }
}