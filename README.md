# pretty-break

When a title is too long to fit into its container, pretty-break breaks it nicely in to lines of roughly equal length.

Example:

_This title is too long to fit inside its <br> container_

Becomes:

_This title is too long to <br> fit inside its container_

## Install

```bash
npm i --save pretty-break
```

## Usage

```js
import { prettybreak } from 'pretty-break';

const targets = document.getElementsByClassName('break-me-nicely');

for (var i = 0; i < targets.length; i++) {
  prettyBreak(targets[i]);
}
```
