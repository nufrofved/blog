# 개인 블로그

아는 것을 적어놓고 정리하지 않으면 항상 까먹고 또 삽질해서 만든 블로그입니다.

혼자만 개발하는 작은 프로젝트라 평소 써보고 싶었던 라이브러리나 프레임워크 또는 최신 기술 위주로 사용했습니다.

## 기술스택

- bun 1.2.1
- Next.js 15
- React 19
- TypeScript 5
- tailwindCSS 4
- MDX
  - @mdx-js/loader
  - @mdx-js/react
  - @next/mdx
  - @types/mdx

## 로컬에서 실행하기

[Bun 설치 (Bun 없는 경우에만 설치)](https://bun.sh/docs/installation)

```zsh
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
bun --version # 버전 확인
```

레파지토리 클론

```zsh
git clone https://github.com/nufrofved/blog.git
```

디펜던시 설치

```zsh
cd blog
bun install
```

로컬에서 실행

```zsh
bun --bun run dev
```
