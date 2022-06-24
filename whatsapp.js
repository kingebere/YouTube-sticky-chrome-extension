
//triggers  immediately after the page has been loaded
window.onload = () => {
//Having difficulties getting the object in sync.get, had to pass the key 
// to get the values
chrome.storage.sync.get(["position"], (result) => {
let fixed = document.querySelector("#player-container-outer");
fixed.style.position= result.position;
})
chrome.storage.sync.get(["bottom"], (result) => {
    let target = document.querySelector("#player-container-outer");
    target.style.bottom=result.bottom;
    })
    chrome.storage.sync.get(["zIndex"], (result) => {
        let target = document.querySelector("#player-container-outer");
        target.style.zIndex=result.zIndex;
        })
}


