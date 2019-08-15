let bus;

chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html',
		{
			id: 'mainWindow',
			'outerBounds': {
				'width': 800,
				'height': 600
			}
		},
		(newWindow) => {

			newWindow.onClosed.addListener((something) => {
				console.log('window close');
				bus = null;
			})

			setInterval(() => {
				if (bus) bus.postMessage('hello from background! ' + Date.now());
				else console.log('no bus...');
			}, 1000);


			newWindow.contentWindow.onload = function (argument) {
				const iframeSandbox = newWindow.contentWindow.document.getElementById('iframe-sandbox');

				setInterval(() => {
					iframeSandbox.contentWindow.postMessage("Hello from background.js to sandbox " + Date.now(), '*');
				}, 1000);

				newWindow.contentWindow.addEventListener('message', (message) => {
					console.log(message.data);
				});
			}
		}
	);
});

chrome.runtime.onConnect.addListener(function(port) {
	bus = port;
	bus.onMessage.addListener(function(message) {
		console.log(message);
	});
});