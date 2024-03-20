import { ReactNode } from "react";

export interface ITextProps {
  children: ReactNode;
  fs?: string;
  fw?: string;
  lh?: string;
  color?: string;
  talign?: 'left' | 'center' | 'right';
  mt?: string;
  mb?: string;
}
