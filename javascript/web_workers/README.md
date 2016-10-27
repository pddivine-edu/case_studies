# Case Study - Web Workers
Small test to understand web workers.

# Overview
- Web workers allow sub-processes to be run in a separite thread from the main process. Messages can be sent both from the sub-process back to the main one and from the main one to the sub-process.

# Items Learned
- Web workers cannot be run from a local file. They must have an origin, i.e. be loaded from a server.
- Web workers cannot terminate themselves. They must be terminated from the initiating process.

# To Do
- Look into web workers within the Node environment.