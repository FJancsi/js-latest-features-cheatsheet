// Set operations: union, intersection, difference, symmetricDifference
// Predicates: isSubsetOf, isSupersetOf, isDisjointFrom

console.log('=== Sets: operations and predicates ===');
const A = new Set([1, 2, 3]);
const B = new Set([3, 4]);

console.log('A ∪ B:', A.union(B));
console.log('A ∩ B:', A.intersection(B));
console.log('A \\ B:', A.difference(B));
console.log('A △ B:', A.symmetricDifference(B));

console.log('A ⊆ {0..4}?', A.isSubsetOf(new Set([0, 1, 2, 3, 4])));
console.log('A disjoint {4,5}?', A.isDisjointFrom(new Set([4, 5])));
console.log('A ⊇ {2,3}?', A.isSupersetOf(new Set([2, 3])));