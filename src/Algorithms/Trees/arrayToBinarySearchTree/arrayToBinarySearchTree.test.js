import perfectBinarySearchTree from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTree (old)';
import arrayToTree from './arrayToBinarySearchTree';

const array = [1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18];

describe('Array to Binary Search Tree', () => {
	it('Should convert an array into a binary search tree with minimal height', () => {
		expect(arrayToTree(array)).toEqual(perfectBinarySearchTree);
	});
});
