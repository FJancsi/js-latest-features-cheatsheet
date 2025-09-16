// Arrays: findLast/findLastIndex, change-by-copy (toSorted, toReversed, toSpliced, with)
// TypedArray: toSorted, toReversed, with

console.log('=== Arrays: findLast / findLastIndex ===');
const xs = [1, 3, 4, 6, 9];
const lastEven = xs.findLast(n => n % 2 === 0);
const lastIdx = xs.findLastIndex(n => n % 2 === 0);
console.log({ xs, lastEven, lastIdx });

console.log('\n=== Arrays: change-by-copy ===');
const sorted = xs.toSorted((a, b) => b - a);
const reversed = sorted.toReversed();
const spliced = xs.toSpliced(1, 2, 10); // remove 2 at index 1, insert 10
const replaced = xs.with(0, 42);
console.log({ xsUnchanged: xs, sorted, reversed, spliced, replaced });

console.log('\n=== TypedArray: change-by-copy ===');
const ta = new Uint8Array([3, 1, 2]);
const taSorted = ta.toSorted();    // numeric ascending
const taReversed = ta.toReversed();
const taReplaced = ta.with(1, 9);
console.log({ ta: Array.from(ta), taSorted: Array.from(taSorted), taReversed: Array.from(taReversed), taReplaced: Array.from(taReplaced) });