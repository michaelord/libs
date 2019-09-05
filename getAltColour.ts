import tinycolor from 'tinycolor2';

export const getAltColour = (colour: string): string => {
	const clr = tinycolor(colour);

	if (clr.isLight()) {
		return 'light';
	}

	return 'dark';
};
