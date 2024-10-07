# dual-webpack

- `Node.js` 의 표준이 아닌 자바스크립트 번들러가 암묵적으로 사용하는 [`ESModule`진입점인 `package.json`의 `module`] (https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697#9f6f:~:text=The%20main%20field%20makes%20sure%20that%20Node%20users%20using%20require%20will%20be%20served%20the%20UMD%20version.%20The%20module%20field%20is%20not%20an%20official%20npm%20feature%20but%20a%20common%20convention%20among%20bundlers%20to%20designate%20how%20to%20import%20an%20ESM%20version%20of%20our%20library.)을 이용하여 `ESModule`을 가리키고, `main`은 `CommonJS`를 가리킴.
- `sideEffects: false` 가 설정되어 있음
- `CommonJS`는 모든 모듈이 `index.js`에 있으며, `ESModule`은 `index.js`가 배럴파일 역할을 하며, 실제 모듈은 각 파일에 존재함.
