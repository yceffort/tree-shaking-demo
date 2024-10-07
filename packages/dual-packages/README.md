# dual-packages

- `Node.js` 의 표준 구성에 따라 `commonjs` 와 `module` 형식을 모두 제공하는 패키지
- `sideEffects: false` 가 설정되어 있음
- `CommonJS`는 모든 모듈이 `index.js`에 있으며, `ESModule`은 `index.js`가 배럴파일 역할을 하며, 실제 모듈은 각 파일에 존재함.
