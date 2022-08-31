# yup-abn

[![CI](https://github.com/azerella/yup-abn/actions/workflows/CI.yml/badge.svg)](https://github.com/azerella/yup-abn/actions/workflows/CI.yml)

Yup extension that validates [ABN](https://abr.business.gov.au/Help/AbnFormat), [ACN, ARBN or ARSN](https://asic.gov.au/for-business/registering-a-company/steps-to-register-a-company/australian-company-numbers/australian-company-number-digit-check/) business identifiers for Australian business'.

## Install

```sh
# NPM
npm i --save-dev yup-abn

# Yarn
yarn add -D yup-abn
```

## Usage

Here's some example usage to get you started:

```js
import * as Yup from 'yup';

import "yup-abn";

// ABN
const ABNSchmea = Yup.number().abn().required();

// ACN, ARBN or ARSN
const ACNSchmea = Yup.string().acn().required();
const ARBNSchmea = Yup.string().arbn().required();
const ARSNSchmea = Yup.string().arsn().required();

console.log(ABNSchmea.isValidSync(51824753556)); // → true
console.log(ACNSchmea.isValidSync('000000019')); // → true
```

## Contributors

Don't be scared to raise an issue or a pull request! 

Any contributions, no matter how big or small will land your picture here and be greatly appreciated ❤️

<div style="display:inline;">
  <a href="https://github.com/adamzerella"><img width="48" height="48" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam Zerella"/></a>
</div>

[npm-version-badge]:https://img.shields.io/npm/v/rollup-plugin-manifest-json