import react from 'React';

import 'module';

import * as fun from 'foo';

import { a, b, c } from 'foo';

import c, { a, b } from 'foo';

import { a as A } from 'foo';

import c, * as fun from 'foo';

export const A = 10;

export * from 'foo';

export { A, B };

export default A;

export default function() {

}

export default a * b;
