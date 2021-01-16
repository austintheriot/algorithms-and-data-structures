export default function replaceSpaces(string) {
	return string.split(/[ ]+/).join('%20');
}
