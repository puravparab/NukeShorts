chrome.storage.sync.get("enabled", (data) => {
  if (data.enabled ?? true) {
    const style = document.createElement("style");
    style.textContent = `
      ytd-rich-section-renderer[is-shorts],
      ytd-reel-shelf-renderer,
      a[href^="/shorts/"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}); 