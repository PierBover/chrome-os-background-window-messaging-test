var port = chrome.runtime.connect({name: "test-channel"});

setInterval(() => {
	port.postMessage('hello from webview! ' + Date.now());
}, 1000);


port.onMessage.addListener(function(message) {
	console.log(message);
});