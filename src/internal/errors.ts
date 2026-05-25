import type { Token } from './lexing';
export interface BirepErrorKind {
	heading: string;
	explanation: (t: Token) => string;
	possible_fixes: string[];
}

export const BirepError: Record<string, BirepErrorKind> = {
	InvalidCharacter: {
		heading: 'Invalid Character',
		explanation: (t: Token) => `Invalid character '${t.representation}' at position ${t.pos}`,
		possible_fixes: ["Try sticking to the allowed characters for the language you're using."],
	},
};
