# treeshake demo

단 24 발표 '여러분의 웹서비스에는 꼭 필요한 것만 있나요? 번들사이즈 최소화를 통한 웹 성능 개선' 에서 사용된 예제 프로젝트입니다.

- `packages` 하위에는 다양한 유즈케이스의 패키지가 존재합니다.
- `applications` 하위에는 앞서 만든 `packages` 패키지를 사용하는 애플리케이션이 존재합니다.
  - `nodejs` 는 `nodejs` 시스템 내에서 `commonjs`, `ESModule` 중 어떤 것을 선택해서 사용하는지 보여줍니다.
  - `webpack` `webpack4`는 각각 `webpack` 최신버전과 `webpack@4` 버전에서 트리쉐이킹 결과 어떤 번들 파일(`./dist/bundle.js`) 이 만들어지는지 보여줍니다.
  - 이를 통해 번들 시스템 내에서 dual packages 설정을 통해 어떻게 트리쉐이킹이 되는지 예측해볼 수 있습니다.

## Requirements

- `corepack` 기반 `pnpm`을 사용하고 있습니다. `corepack enable`로 `corepack` 을 활성화하여 `pnpm`을 사용해주세요.
- `pnpm workspace` 기반으로 만들어졌습니다.
- 별도 빌드 시스템이 존재하지 않습니다. `applications` 의 하위 디렉토리로 이동하여 `pnpm` 명령어로 빌드 해보실 수 있습니다.




