/// <reference types="react-scripts" />

declare module 'react-icons/*' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}
