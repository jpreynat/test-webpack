## How to test it

Install deps:

```
$ yarn
```

Build with webpack:

```
$ yarn run build
```

Check the compiled code:

```
$ yarn run log
```

## Case

Webpack produces invalid code from [this file](./src/utils/utils.js).

Incorrect code produced initially:

```js
case"block":case"inline":return function(e){const{nodes:r=[]}=e,t=u(e);return(void 0).fromJS({value:t})}(e);
```

Uncommenting either the call to `switcher` in `./src/index.js` or the `innerGraph: false` option in `./webpack/config.js` will make the code resolve correctly.

Correct code produced after fix:

```js
case"block":return function(e){const{nodes:r=[]}=e,t=l(e);return i.fromJS({value:t})}(e);case"inline":return function(e){const{nodes:r=[]}=e,t=l(e);return u.fromJS({value:t})}(e);
```
