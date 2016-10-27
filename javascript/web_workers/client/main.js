console.log('Main process initiates web worker.');
const worker = new Worker('./web_workers/worker_1.js');

worker.postMessage('This message is sent down from the main process to the worker.');

worker.onmessage = function (event) {
  console.log('Message received by the main process form the web worker: ', event);
  termWorker(worker);
};

worker.onerror = function (event) {
    console.log(event.message, event);
    termWorker(worker);
};

function termWorker(currentWorker) {
  console.log('Main process terminates web worker.');
  currentWorker.terminate();
}
