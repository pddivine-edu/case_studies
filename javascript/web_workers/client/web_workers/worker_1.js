console.log('Web worker is running. Long running tasks can be executed on this separite thread.');
self.addEventListener('message', function(event) {
  console.log('Message received by worker from main process', event);
  //self.postMessage(e.data);
  postMessage('This message is send from the worker to the main process');
}, false);
//