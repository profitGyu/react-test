/// <reference types="vite/client" />

// SVG를 React 컴포넌트로 import할 수 있도록 타입 정의
declare module '*.svg?react' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// SVG를 URL로 import할 수 있도록 타입 정의
declare module '*.svg' {
  const content: string;
  export default content;
}
