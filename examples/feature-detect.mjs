console.log('=== Feature detection ===');
const hasChangeByCopy = 'toSorted' in Array.prototype && 'with' in Array.prototype;
const hasSetOps = 'union' in Set.prototype;
const hasWithResolvers = 'withResolvers' in Promise;
const supportsV = (() => { try { new RegExp('', 'v'); return true; } catch { return false; } })();

console.table({ hasChangeByCopy, hasSetOps, hasWithResolvers, supportsV });