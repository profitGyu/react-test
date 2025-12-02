import { ImgHTMLAttributes } from 'react';

interface IconProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  name: string;
  size?: number | string;
}

/**
 * SVG 아이콘 컴포넌트
 * 
 * 사용 예시:
 * <Icon name="logo" className="w-6 h-6" />
 * <Icon name="menu-icon" size={24} />
 * 
 * @param name - assets/icons 폴더의 SVG 파일명 (확장자 제외)
 * @param className - 추가 CSS 클래스
 * @param size - 아이콘 크기 (width, height에 적용)
 */
export const Icon = ({ name, className = '', size, ...props }: IconProps) => {
  // Vite에서 정적 에셋은 /src/assets/icons/ 경로에서 직접 참조
  // 빌드 시 자동으로 최적화되고 해시가 추가됩니다
  const iconPath = `/src/assets/icons/${name}.svg`;
  
  return (
    <img 
      src={iconPath}
      alt={name}
      className={className}
      width={size}
      height={size}
      {...props}
    />
  );
};

