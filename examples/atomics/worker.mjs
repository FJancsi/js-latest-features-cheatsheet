import { parentPort, workerData } from 'node:worker_threads';

const ia = new Int32Array(workerData);
console.log('Worker: registering wait until ia[0] changes from 0…');

// Register the wait first
const waitPromise = Atomics.waitAsync(ia, 0, 0).value;

// Tell main we are now waiting (registered)
parentPort.postMessage({ type: 'armed' });

// Log the resolution status and notify main
waitPromise.then(status => {
  const val = Atomics.load(ia, 0);
  console.log('Worker: woken! status =', status, ' ia[0]=', val);
  parentPort.postMessage({ type: 'done', status, val });
});