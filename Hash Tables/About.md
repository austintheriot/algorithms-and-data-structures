# Hash Tables

## Table of Contents

- [Hash Tables](#hash-tables)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Steps](#steps)
  - [More Info](#more-info)
    - [Runtime](#runtime)
    - [Collision Resolution](#collision-resolution)
      - [Separate Chaining](#separate-chaining)
      - [Open Addressing](#open-addressing)

## About

Also called: hash maps, unordered maps, dictionary, etc.

The JavaScript equivalent of a hashmap is the Object. On the whole, low-level
implementation of hash tables in JavaScript isn't necessary, since objects
implement their own hashing function behind the scenes, but where that knowledge
is necessary, here's a quick rundown of how to implement one:

## Steps

1. Declare an array of a fixed size
2. Use hash function to assign an array index to a key Requirements of a hash
   function:

   1. Fast
   2. Uniform distribution
   3. Mitigate collisions

   An easy (dumb) implementation is:

   ```js
   function hash(string) {
   	let total = 0;
   	for (let i = 0; i < string.length; i++) {
   		total += string[i].charCodeAt(0) * i;
   	}
   	return total % string.length;
   	//or modulo by a prime number, such as 2069
   }
   ```

3. Store the values at each index with a linked list (to allow collisions)

## More Info

### Runtime

The average runtime for finding a value in a hash table is O(1). This occurs if
the data is evenly distributed with few collisions.

Worst possible runtime for finding an element in a hash table: O(n). This occurs
if all the values are stored at the same location.

### Collision Resolution

#### Separate Chaining

- Typically implemented with linked list but could also use a binary search tree
  (to bring worst-case look-up time down to O(log n)).

#### Open Addressing

- All elements stored in the hash table itself
- Table may eventually become full.
- Deletions must be kept occupied to maintain consistency when searching, but
  they are marked 'deleted'.

- Linear Probing:
  - Process:
    1. If an index is full, go to
       - `(index + 1) % array.length`
       - `(index + 2) % array.length`
    2. If the index is empty, deposit value
  - Main problem with this is clustering. It can begin to take a lot of time to
    find an empty slot if consecutive elements form groups.
- Quadratic Probing:
  - Process:
    1. If an index is full, go to:
       - `(index + 1**1) % array.length`
       - `(index + 2**2) % array.length`
    1. If the index is empty, deposit value
- Double Hashing:
  - Process:
    - Use a second, independent hash function, newIndex:
      1. If an index is full, go to
         - `(index + 1*newIndex) % array.length`
         - `(index + 2*newIndex) % array.length`
      2. If the index is empty, deposit value
- Random probing:
  - Randomizer is seeded with input, so that the same random sequence is
    generated again each time.
