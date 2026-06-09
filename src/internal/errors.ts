interface BirepError {
	heading: string;
	subheading?: string;
	possible_fixes: string[];
}

// Kid: Mom, I want golang errors
// Mom: We have golang errors at home
//
// Golang errors at home:
export type Error = BirepError | null;

export type Success<T> = T extends null ? { t: null; e: Error } : { t: T; e: null };
