// Custom background script for 2004Scape Skill Calculator

// Listen for clicks on the extension action (icon)
chrome.action.onClicked.addListener((tab) => {
  // Check if the Side Panel API is available (Chrome 116+)
  if (chrome.sidePanel) {
    chrome.sidePanel
      .toggle({ windowId: tab.windowId })
      .then(() => {
        console.log("Side panel toggled for tab:", tab.id);
      })
      .catch((error) => {
        console.error("Failed to toggle side panel:", error);
      });
  } else {
    console.warn("Side Panel API not available. Falling back to popup.");
    // Fallback to opening the popup if Side Panel isn't supported
    chrome.action.openPopup();
  }
});

// Optional: Listen for messages from content scripts or popup (for future extensibility)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in background:", message);
  if (message.action === "getSidePanelStatus") {
    chrome.sidePanel
      .getPanelBehavior()
      .then((behavior) => {
        sendResponse({ status: behavior });
      })
      .catch((error) => {
        sendResponse({ status: "error", error: error.message });
      });
    return true; // Indicates asynchronous response
  }
});

// Optional: Log when the background script loads
console.log("2004Scape Skill Calculator background script loaded.");