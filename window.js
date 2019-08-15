console.log('WINDOW');
const iframe = document.getElementById('iframe');
const webview = document.getElementById('webview');

window.addEventListener('message', (event) => {
	console.log('MESSAGE en mainWindow!');
});

// chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
// 		console.log('message on Window!');
// 		console.log(request);
// 		console.log(sender);
// 		console.log(sendResponse);
// 		// if (sender.id in blacklistedIds) {
// 		// 	sendResponse({"result":"sorry, could not process your message"});
// 		// 	return;
// 		// } else if (request.myCustomMessage) {
// 		// 	appendLog("from "+sender.id+": "+request.myCustomMessage);
// 		// 	sendResponse({"result":"Ok, got your message"});
// 		// } else {
// 		// 	sendResponse({"result":"Ops, I don't understand this message"});
// 		// }
// });

// function errorHandler (error) {
// 	console.log('Error', error);
// }

// function getFileSystem (size = 1024 * 1024) {
// 	return new Promise((resolve, reject) => {
// 		window.webkitRequestFileSystem(window.PERSISTENT, size, (fs) => {
// 			resolve(fs);
// 		}, errorHandler);
// 	});
// }

// function getFileEntry (filePath, fs, create = false) {
// 	return new Promise((resolve, reject) => {
// 		fs.root.getFile(filePath, {create}, (fileEntry) => {
// 			resolve(fileEntry);
// 		}, (error) => {
// 			// si no estamos creando el error es que no existe el archivo
// 			console.log('file entry error', filePath, error);
// 			resolve();
// 		});
// 	});
// }

// async function getFileURL (filePath) {
// 	console.log('getting file URL', filePath);
// 	const fs = await this.getFileSystem();
// 	const fileEntry = await this.getFileEntry(filePath, fs);
// 	if (!fileEntry) {
// 		console.log('No file entry!');
// 		return;
// 	}
// 	return fileEntry.toURL();
// }

// (async function () {
// 	const filePath = '/Volumes/Data/Projects/Github/chrome-os-background-window-messaging-test/iframe.html';
// 	const url = await getFileURL(filePath)
// })()