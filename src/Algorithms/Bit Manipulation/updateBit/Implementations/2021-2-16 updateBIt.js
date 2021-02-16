module.exports = function updateBit(num, i, bit) {
  return num & ~(1 << i) | (bit << i);
};
