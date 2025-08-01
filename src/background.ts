console.log("NukeShorts background script loaded.");

chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    console.log("NukeShorts: Navigating to", details.url);
    chrome.storage.sync.get("enabled", (data) => {
      const isEnabled = data.enabled ?? true;
      console.log("NukeShorts: Extension enabled?", isEnabled);
      if (isEnabled) {
        const url = new URL(details.url);
        if (url.pathname.startsWith("/shorts/")) {
          const newUrl = "https://www.youtube.com/";
          console.log(`NukeShorts: Navigating away from Shorts to ${newUrl}`);
          chrome.tabs.update(details.tabId, { url: newUrl });
        }
      }
    });
  },
  {
    url: [
      {
        hostContains: "youtube.com",
      },
    ],
  }
); 