# 발도장 (Paw Diary) 🐾

반려동물과 함께하는 여정을 기록하는 웹앱 서비스 Next.js + TS 프로젝트입니다.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
npm install npx -g
npx create-next-app@latest pawdiary-next-ts --typescript
```

## Goals 💡

### Skills

- 전역 상태 관리를 위한 Zustand, 서버 상태 관리를 위한 React-Query 사용
- 편리한 스타일링 작업을 위한 Tailwind CSS 적용
- date-fns 라이브러리 활용한 캘린더 기능 개발
- Next.js 통한 SSR, SSG 활용
- 모바일 중심 반응형 개발

### Services

- [ ] 사용자 및 반려동물 정보 등록
- 기본 정보 입력 (이름, 나이, 종, 성별, 중성화 여부 등)
- 여러 마리 등록 가능

- [ ] 품종별 맞춤 정보 제공
- 카테고리: 미용, 식습관, 운동/생활습관, 질병 예방
- 조건: 종/크기/털 타입/나이/건강 상태 기반 필터링

- [ ] 주/월 단위 건강수첩 관리
- 달력 UI 기반
- 건강 상태 기록 추가 (ex. 식사, 간식, 산책/놀이, 배변 등)
- 루틴 기록 및 수정 기능 (ex. 마지막 미용일 → 다음 미용 알림)

## Updates 📝

- 250726 프로젝트 생성 및 Next.js 프로젝트 세팅

## Folder Structure 📁

```
public/
  +-- images/
  +-- fonts/
src/
  +-- apis/
  +-- app/
  |   +-- page.ts
  |   +-- ...
  +-- components/ (reusable UI components having atoms combined)
  |   +-- Button.tsx
  |   +-- Header.tsx
  |   +-- Navbar.tsx
  |   +-- ...
  +-- hooks/
  +-- stores/
  +-- styles/ (style sheets for setting common styles)
  +-- types/
  +-- utils/
.
.
.
```

## Convention

### 1) Naming Conventions 📝

- variable, function: camelCase
- constant variable: SCREAMING_SNAKE_CASE
- class, component name: PascalCase
- folder name, route path: nocase
- html tag properties (ex. className, id etc.): skewer-case

#### 📚 참고

[**Airbnb JavaScript Style Guide**](https://github.com/airbnb/javascript)

```
1. Avoid single letter names. Be descriptive with your naming.
  1-1. Also, Avoid Mental Mapping.

2. Use camelCase when naming objects, functions, and instances.

3. Use PascalCase only when naming constructors or classes. (also file name)

...
```

### 2) Commit Messages 💬

| 태그         | 설명                                                                          |
| ------------ | ----------------------------------------------------------------------------- |
| `feat: `     | 기능 추가                                                                     |
| `fix: `      | 버그를 고친 경우 🛠                                                            |
| `docs: `     | 문서를 수정한 경우 📝                                                         |
| `style: `    | CSS 등 사용자 UI 디자인 변경 🎨                                               |
| `refactor: ` | 프로덕션 코드 리팩토링 🧑‍🔧                                                     |
| `test: `     | 테스트 코드 추가 또는 수정 🧪                                                 |
| `chore: `    | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우 (프로덕션 코드 변경 X) ⚙️ |
| `rename: `   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 ✍️                         |
| `remove: `   | 파일을 삭제하는 작업만 수행한 경우 🗑️                                         |

## Quick Start 🚀

### 1. clone project & install modules

```bash
git clone https://github.com/callu9/pawdiary-next-ts.git
npm install
```

### 2. run the development serverç

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
