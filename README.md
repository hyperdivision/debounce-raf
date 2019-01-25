# `debounce-raf`

[![Build Status](https://travis-ci.com/hyperdivision/debounce-raf.svg?branch=master)](https://travis-ci.com/hyperdivision/debounce-raf)

> Debounce function until next requestAnimationFrame. Auto cancel all extraneous calls between frames

## Usage

```js
const raf = require('debounce-raf')

const render = raf(function ({ time }) {
  document.body.textContent = `Update on ${time}`
})

// Called every 4ms, but will only render efter animation frame, with the latest
// call
setInterval(render, 4, { time: Date.now() })
```

## API

### `var debouncedFn = raf(fn)`

Debounce `fn` to every animation frame. Cancel all calls in between. Will
forward any args passed to `debouncedFn` onto `fn`.


## Install

```sh
npm install debounce-raf
```

## License

[ISC](LICENSE)
