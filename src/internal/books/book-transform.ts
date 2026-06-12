import type { t_reference } from './book-type';

export class Optimizer {
	references: t_reference[] = [];
	constructor(refs: t_reference[]) {
		this.references = refs;
	}

	method1(): void {}
	method2(): void {}
	method3(): void {}
	method4(): void {}
}
