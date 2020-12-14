export default function sieve(max) {
	const primes = [];
	const nums = new Array(max + 1).fill(true);

	nums[0] = nums[1] = false;

	for (let i = 2; i <= max; i++) {
		if (nums[i]) {
			primes.push(i);
		}

		let j = i ** 2;
		while (j <= max) {
			nums[j] = false;
			j += i;
		}
	}

	return primes;
}
