chrome.storage.sync.get("enabled", (data) => {
  if (data.enabled ?? true) {
    const style = document.createElement("style");
    style.textContent = `
      ytd-rich-section-renderer[is-shorts],
      ytd-reel-shelf-renderer,
      ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]),
      a[href^="/shorts/"],
      ytd-mini-guide-entry-renderer:has(a[title="Shorts"]),
      ytd-guide-entry-renderer:has(a[title="Shorts"]) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}); 