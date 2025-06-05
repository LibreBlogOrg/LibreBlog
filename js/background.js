let creating;
const setupOffscreenDocument = async function(path) {
  if (await chrome.offscreen.hasDocument?.()) return;

  if (creating) {
    await creating;
  } else {
    creating = chrome.offscreen.createDocument({
      url: chrome.runtime.getURL(path),
      reasons: [
        chrome.offscreen.Reason.WORKERS, 
        chrome.offscreen.Reason.LOCAL_STORAGE
      ],
      justification: "So that the SQLite tables are created before the first display, allowing the page to load faster.",
    });
    await creating;
    creating = null;
  }
}

setupOffscreenDocument("index.html");

chrome.action.onClicked.addListener((_) => {
  chrome.tabs.create({
    url: "index.html"
  });
});