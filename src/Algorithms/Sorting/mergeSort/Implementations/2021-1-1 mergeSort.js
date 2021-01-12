function merge(la, ra) {
	const fa = [];
	let li = 0;
	let ri = 0;

	while ((li < la.length) & (ri < ra.length)) {
		if (la[li] < ra[ri]) {
			fa.push(la[li]);
			li++;
		} else {
			fa.push(ra[ri]);
			ri++;
		}
	}
	return fa.concat(la.slice(li), ra.slice(ri));
}

export default function mergeSort(array) {
	if (array.length <= 1) return array;
	const middle = Math.floor(array.length / 2);
	const la = array.slice(0, middle);
	const ra = array.slice(middle);
	return merge(mergeSort(la), mergeSort(ra));
}
