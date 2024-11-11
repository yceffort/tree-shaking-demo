// 트리 쉐이킹 안됨
import { hello as hello1 } from "dual-packages";
import { hello as hello2 } from "dual-packages-without-sideeffects";

// 트리쉐이킹 잘됨
import { hello as hello3 } from "dual-webpack";
import { hello as hello4 } from "dual-webpack-without-sideeffects";

// 트리 쉐이킹 안됨
import { hello as hello5 } from "cjs-package";
import { hello as hello6 } from "cjs-package-without-sideeffects";
import { hello as hello7 } from "cjs-package-without-sideeffects-files";
import { hello as hello8 } from "cjs-package-files";

// 트리쉐이킹 잘됨
import { hello as hello9 } from "dual-webpack-mjs";
import { hello as hello10 } from "dual-webpack-mjs-without-sideeffects";

const element1 = document.getElementById("1");
element1.innerHTML = `${hello1("a")}`;

const element2 = document.getElementById("2");
element2.innerHTML = `${hello2("a")}`;

const element3 = document.getElementById("3");
element3.innerHTML = `${hello3("a")}`;

const element4 = document.getElementById("4");
element4.innerHTML = `${hello4("a")}`;

const element5 = document.getElementById("5");
element5.innerHTML = `${hello5("a")}`;

const element6 = document.getElementById("6");
element6.innerHTML = `${hello6("a")}`;

const element7 = document.getElementById("7");
element7.innerHTML = `${hello7("a")}`;

const element8 = document.getElementById("8");
element8.innerHTML = `${hello8("a")}`;

const element9 = document.getElementById("9");
element9.innerHTML = `${hello9("a")}`;

const element10 = document.getElementById("10");
element10.innerHTML = `${hello10("a")}`;
