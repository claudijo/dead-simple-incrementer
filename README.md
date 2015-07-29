# Dead Simple Incrementer

No options, no fuss... Dead simple integer incrementer, which for example can
be used as a naive id generator.


## Installation

```js
npm install dead-simple-incrementer
```

## Usage

Create an incrementer, which will return an incremented integer with each call
to `next()`. Incrementer starts with 1.

```js
var inc = require('dead-simple-incrementer')();

inc.next(); // Returns 1
inc.next(); // Returns 2;
inc.next(); // Returns 3;
// ... and so on.
```

## Test

Run unit tests;

`$ npm test`

# License

[MIT](LICENSE)
