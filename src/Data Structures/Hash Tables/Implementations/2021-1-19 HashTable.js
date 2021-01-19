import HashTable from './HashTable';

describe(`Hash Tables:`, () => {
  it('Should create an array of specified length.', () => {
    const hashTable1 = new HashTable(1);
    const hashTable5 = new HashTable(5);
    const hashTable100 = new HashTable(100);
    const hashTable1000 = new HashTable(1000);

    expect(hashTable1.array.length).toBe(1);
    expect(hashTable5.array.length).toBe(5);
    expect(hashTable100.array.length).toBe(100);
    expect(hashTable1000.array.length).toBe(1000);
  });

  it('HashTable._hash() should return an index within the length of the array', () => {
    const hashTable = new HashTable(2);
    hashTable.set('hello', 'world');
    hashTable.set('one', 1);
    hashTable.set('true', true);
    hashTable.set('false', false);
    expect(hashTable._hash('example')).toBeGreaterThanOrEqual(0);
    expect(hashTable._hash('example')).toBeLessThan(hashTable.array.length);
    expect(hashTable._hash('123456789')).toBeGreaterThanOrEqual(0);
    expect(hashTable._hash('123456789')).toBeLessThan(hashTable.array.length);
  });

  it('Should .get() and .set() values', () => {
    const newHashTable = new HashTable(1);
    newHashTable.set('two', 2);
    newHashTable.set('three', 3);
    newHashTable.set('four', 4);
    newHashTable.set('five', 5);

    expect(newHashTable.get('two')).toBe(2);
    expect(newHashTable.get('three')).toBe(3);
    expect(newHashTable.get('four')).toBe(4);
    expect(newHashTable.get('five')).toBe(5);
  });

  it('HashTable.get() should return undefined for nonexistent keys', () => {
    const newHashTable = new HashTable(1);
    newHashTable.set('two', 2);
    newHashTable.set('three', 3);
    newHashTable.set('four', 4);
    newHashTable.set('five', 5);

    expect(newHashTable.get('zero')).toBeUndefined();
    expect(newHashTable.get('1')).toBeUndefined();
    expect(newHashTable.get('six')).toBeUndefined();
    expect(newHashTable.get('7')).toBeUndefined();
  });
});
