import { createContext } from 'react';

export interface PageContextProps {
  language?: "English" | "Spanish";
}

export const PageContext = createContext({
  language: {
    language: 'English',
  } as PageContextProps,
  setLanguage: (context: PageContextProps) => {},
});