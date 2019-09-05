export const generateGUID = (): string => {
	const first = (Math.random() * 46656) | 0;
	const second = (Math.random() * 46656) | 0;

	const a: string = ('000' + first.toString(36)).slice(-3);
	const b: string = ('000' + second.toString(36)).slice(-3);

	return a + b;
};
