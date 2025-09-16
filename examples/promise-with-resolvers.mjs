// Promise.withResolvers: standardized deferred

console.log('=== Promise.withResolvers ===');

const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => resolve('ready!'), 100);

const value = await promise;
console.log('Resolved with:', value);

// Uncomment to see rejection handling:
// const { promise: p2, resolve: r2, reject: j2 } = Promise.withResolvers();
// setTimeout(() => j2(new Error('nope')), 50);
// try { await p2; } catch (e) { console.log('Rejected with:', e.message); }