export const sentenceCase = (str: string): string => {
	return str
		.replace(/[a-z]/i, function(letter) {
			return letter.toUpperCase();
		})
		.trim();
};
