declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<{ children?: ReactNode }>;
}
