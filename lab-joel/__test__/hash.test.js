'use strict';

const Hash = require('../lib/hash');

describe('hash.js', () => {

  let testHash = new Hash();
  testHash.set('taco', 9);
  testHash.set('taco', 11);
  testHash.set('beef', 14);

  it('should return some stuff', () => {

    expect(testHash.memory[3].head.value).toBe(9);
  });
  it('should return taco stuff', () => {
    expect(testHash.get('taco').head.value).toBe(9);
  });
  it('should delete beef', () => {
    console.log(testHash);
    expect(testHash.remove('beef')).toBe(undefined);
    console.log(testHash);
  });
});
