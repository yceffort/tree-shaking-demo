import { hello as hello1 } from "dual-packages";
import { hello as hello2 } from "dual-packages-without-sideeffects";
import { hello as hello3 } from "dual-webpack";
import { hello as hello4 } from "dual-webpack-without-sideeffects";

import { hello as hello5 } from "cjs-package";
import { hello as hello6 } from "cjs-package-without-sideeffects";
import { hello as hello7 } from "cjs-package-without-sideeffects-files";
import { hello as hello8 } from "cjs-package-files";

import { hello as hello9 } from "dual-webpack-mjs";
import { hello as hello10 } from "dual-webpack-mjs-without-sideeffects";

console.log(hello1("a")); // esm
console.log(hello2("a")); // esm
console.log(hello3("a")); // cjs
console.log(hello4("a")); // cjs
console.log(hello5("a")); // cjs
console.log(hello6("a")); // cjs
console.log(hello7("a")); // cjs
console.log(hello8("a")); // cjs
console.log(hello9("a")); // cjs
console.log(hello10("a")); // cjs
