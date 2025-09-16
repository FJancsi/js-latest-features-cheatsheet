import { Worker } from 'node:worker_threads';

console.log('=== Atomics.waitAsync (Worker) ===');

const sab = new SharedArrayBuffer(4);
const ia = new Int32Array(sab); // ia[0] starts as 0
console.log('Main: ia[0]=', ia[0]);

const worker = new Worker(new URL('./worker.mjs', import.meta.url), { workerData: sab });

// Helper to wait for a specific message type
function waitFor(type) {
  return new Promise(resolve => {
    const handler = msg => {
      if (msg && msg.type === type) {
        worker.off('message', handler);
        resolve(msg);
      }
    };
    worker.on('message', handler);
  });
}

// Ensure the worker has registered its wait
await waitFor('armed');

console.log('Main: storing ia[0] = 1 and notifying…');
Atomics.store(ia, 0, 1);

// Now there should be exactly one waiter to wake
const notified = Atomics.notify(ia, 0, 1);
console.log('Main: notified', notified, 'waiter(s)');

const { status, val } = await waitFor('done');
console.log(`Main: worker says -> status=${status} ia[0]=${val}`);

await worker.terminate();
console.log('Main: done.');