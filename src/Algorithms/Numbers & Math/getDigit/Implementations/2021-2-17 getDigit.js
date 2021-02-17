import countDigits from '../countDigits/countDigits.solution';

//return 0 for indixes out of range
//return negative digit from negative numbers

export default function getDigit(num, i) {
  if (i < 0 || i > countDigits(num) - 1) return 0;
  return (Math.floor(Math.abs(num) / 10 ** i) % 10) * Math.sign(num);
}
