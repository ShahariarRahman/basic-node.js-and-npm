_**In Browser,** Javascript's global variable is **`window` :**_

```
const access1 = "can't override global variable" ;
let   access2 = "can't override global variable" ;
var   access3 = "can override global variable" ;

window.access1 // undefine
window.access2 // undefine
window.access3 // can override global variable
```

#### Manage global variable in Node.js :

- _Each **JavaScript** file in Node.js acts as an **encapsulated module**._
- _**`module`** is **global object** in Node.js, use to share data by :_
- - _export:_

```
module.exports = {
  name,
  add,
};
```

- - _import:_

```
const { add } = require("./index");
```
