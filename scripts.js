document.getElementById("sendMessage").addEventListener("click", () => {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      console.log("Response from background: " + response.farewell);
    });
  });
  