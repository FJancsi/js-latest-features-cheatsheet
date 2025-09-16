// RegExp /v flag: Unicode sets with unions, intersections (&&), subtractions (--)

console.log('=== RegExp /v (Unicode sets) ===');

const supportsV = (() => { try { new RegExp('', 'v'); return true; } catch { return false; } })();
if (!supportsV) {
  console.warn('Your runtime does not support RegExp /v. Please use Node 22+ or a recent runtime.');
  process.exit(0);
}

// Intersection: Greek script AND uppercase property
const greekUpper = /[\p{Script=Greek}&&\p{Uppercase}]/v;
console.log('Ω (Greek uppercase):', greekUpper.test('Ω')); // true
console.log('ω (Greek lowercase):', greekUpper.test('ω')); // false

// Subtraction: ASCII letters minus vowels
const consonant = /[[A-Za-z]--[AEIOUaeiou]]/v;
console.log('b is consonant:', consonant.test('b')); // true
console.log('a is consonant:', consonant.test('a')); // false

// Union example: digits OR hex letters
const digitsOrHex = /[[0-9][A-Fa-f]]/v;
console.log('F matches digitsOrHex:', digitsOrHex.test('F')); // true
console.log('g matches digitsOrHex:', digitsOrHex.test('g')); // false