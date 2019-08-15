console.log('IFRAME SANDBOX');
console.log(chrome);
console.log(chrome.runtime);

setInterval(() => {
	window.parent.postMessage("Hello from iframe-sandbox! " + Date.now(), '*');
}, 1000);

window.addEventListener('message', (message) => {
	console.log(message.data);
});