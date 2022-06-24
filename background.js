chrome.runtime.onInstalled.addListener(() => {
    const setAttributes={ position:"fixed",bottom:"2%",zIndex:"9999999999999" }
    chrome.storage.sync.set(setAttributes);
});