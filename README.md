# ENGINEER1

AI x FANDOM. Next Gen Entertainment Studio specialized in IP-based commerce and AI content development.

## 📋 프로젝트 소개

ENGINEER1은 IP 기반 커머스 및 AI 콘텐츠 개발에 특화된 엔터테인먼트 스튜디오의 공식 웹사이트입니다. 팬덤과 기술이 만나 만드는 설레는 경험을 제공합니다.

## 🚀 기술 스택

### Core

- **React 18.3** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구 및 개발 서버

### UI/UX

- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - 컴포넌트 라이브러리
- **Framer Motion** - 애니메이션 라이브러리
- **Lucide React** - 아이콘 라이브러리

### 라우팅 & 국제화

- **React Router DOM** - 클라이언트 사이드 라우팅
- **i18next** - 다국어 지원 (한국어/영어)
- **react-i18next** - React용 i18n 바인딩

### 기타

- **react-kakao-maps-sdk** - 카카오맵 통합
- **react-helmet-async** - SEO 최적화
- **class-variance-authority** - 컴포넌트 variant 관리

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18 이상
- pnpm 9.0.0 이상

### 설치

```bash
# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (포트: 3000)
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

### 빌드

```bash
# 프로덕션 빌드
pnpm build
```

### 미리보기

```bash
# 빌드된 결과물 미리보기
pnpm preview
```

### 코드 품질

```bash
# ESLint 실행
pnpm lint

# ESLint 자동 수정
pnpm lint:fix

# Prettier 포맷팅
pnpm format
```

## 📁 프로젝트 구조

```
engineer1/
├── public/                 # 정적 파일 (favicon, 이미지 등)
├── src/
│   ├── assets/            # 에셋 파일 (이미지, 아이콘)
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── about/        # About 페이지 관련 컴포넌트
│   │   ├── contact/      # Contact 페이지 관련 컴포넌트
│   │   ├── icons/        # 아이콘 컴포넌트
│   │   ├── layout/       # 레이아웃 컴포넌트 (Header, SEO 등)
│   │   └── ui/           # UI 컴포넌트 (Button, Input 등)
│   ├── containers/       # 페이지 컨테이너 컴포넌트
│   ├── lib/              # 유틸리티 및 설정 파일
│   ├── locales/          # 다국어 번역 파일
│   ├── pages/            # 페이지 컴포넌트
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # 앱 진입점
├── index.html            # HTML 템플릿
├── vite.config.ts        # Vite 설정
├── tailwind.config.js    # Tailwind CSS 설정
└── package.json          # 프로젝트 의존성
```

## ✨ 주요 기능

### 페이지

- **About 페이지** (`/`) - 회사 소개, 핵심 가치, 역량, 프로젝트 소개
- **Contact 페이지** (`/contact`) - 연락처 정보, 문의 폼, 카카오맵

### 기능

- 🌐 **다국어 지원** - 한국어/영어 전환
- 🌓 **다크모드** - 라이트/다크 테마 전환
- 📱 **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- 🗺️ **카카오맵 통합** - 오시는 길 안내
- ✨ **애니메이션** - Framer Motion을 활용한 부드러운 전환 효과
- 🔍 **SEO 최적화** - 메타 태그 및 Open Graph 지원

## 🛠️ 개발 가이드

### 환경 변수

카카오맵을 사용하기 위해서는 카카오맵 API 키가 필요합니다. 환경 변수 파일을 생성하여 설정하세요.

```bash
# .env.local
VITE_KAKAO_MAP_API_KEY=your_kakao_map_api_key
```

### 다국어 추가

`src/locales/` 디렉토리에 번역 파일을 추가하고 `src/lib/i18n.ts`에서 리소스를 등록하세요.

### 스타일링

- Tailwind CSS를 사용하여 스타일링합니다
- `src/components/ui/` 디렉토리의 컴포넌트는 shadcn/ui 기반입니다
- 커스텀 색상 및 테마는 `tailwind.config.js`에서 설정할 수 있습니다

### 라우팅

새로운 페이지를 추가하려면:

1. `src/pages/`에 페이지 컴포넌트 생성
2. `src/App.tsx`의 Routes에 Route 추가

## 📝 스크립트

- `pnpm dev` - 개발 서버 실행
- `pnpm build` - 프로덕션 빌드
- `pnpm preview` - 빌드 결과물 미리보기
- `pnpm lint` - ESLint 실행
- `pnpm lint:fix` - ESLint 자동 수정
- `pnpm format` - Prettier 포맷팅

## 👥 팀

ENGINEER1 Team

---

© 2025 ENGINEER1. All rights reserved.
