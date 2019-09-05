export const replaceTokens = (str: string, replacements: any): string => {
	let string = str;

	if (replacements) {
		for (const [key, value] of Object.entries(replacements)) {
			string = string.replace(`{${key}}`, String(value));
		}
	}

	return string;
};
