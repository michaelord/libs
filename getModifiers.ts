export const getModifiers = (base: string, modifiers: object): string => {
	const items: Array<string> = [base];

	for (const [key, value] of Object.entries(modifiers)) {
		if (value) {
			if (typeof value === 'boolean') {
				items.push(`${base}--${key}`);

				if (key === 'active') {
					items.push(key);
				}
			} else {
				items.push(`${base}--${value}`);
			}
		}
	}

	return items.join(' ');
};
