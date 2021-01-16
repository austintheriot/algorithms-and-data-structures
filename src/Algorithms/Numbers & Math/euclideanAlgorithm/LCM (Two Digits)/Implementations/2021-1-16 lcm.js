import lcm from './lcm.solution';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export default (a, b) => (a * b) / gcd(a, b);
