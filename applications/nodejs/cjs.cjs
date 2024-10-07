const { hello: hello1 } = require("dual-packages");
const { hello: hello2 } = require("dual-packages-without-sideeffects");
const { hello: hello3 } = require("dual-webpack");
const { hello: hello4 } = require("dual-webpack-without-sideeffects");

const { hello: hello5 } = require("cjs-package");
const { hello: hello6 } = require("cjs-package-without-sideeffects");
const { hello: hello7 } = require("cjs-package-without-sideeffects-files");
const { hello: hello8 } = require("cjs-package-files");

const { hello: hello9 } = require("dual-webpack-mjs");
const { hello: hello10 } = require("dual-webpack-mjs-without-sideeffects");

// all cjs
console.log(hello1("a"));
console.log(hello2("a"));
console.log(hello3("a"));
console.log(hello4("a"));
console.log(hello5("a"));
console.log(hello6("a"));
console.log(hello7("a"));
console.log(hello8("a"));
console.log(hello9("a"));
console.log(hello10("a"));
