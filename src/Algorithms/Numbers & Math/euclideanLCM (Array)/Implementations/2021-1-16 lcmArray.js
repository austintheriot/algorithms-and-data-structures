const gcd = (a, b ) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => ( a * b ) / gcd(a, b);
export default (array) => array.reduce((a , b) => lcm(a, b));
