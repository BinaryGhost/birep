interface BirepError {
	heading: string;
	possible_fixes: string[];
}

// Kid: Mom, I want golang errors
// Mom: We have golang errors at home
//
// Golang errors at home:
export type Error = BirepError | null;

export type Success<T> = { t: T; e: Error };
