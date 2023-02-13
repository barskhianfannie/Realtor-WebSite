import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useContext } from 'react';
import { PageContext } from '@utils/contexts';
import LanguageIcon from './icon';

export const LanguageController = () => {
  // Destructuring the Object
  const {
    language: { language },
    setLanguage,
  } = useContext(PageContext);
  const languages = ['English', 'Spanish'];
  const tabcCSSActive = 'inline-flex items-center bg-gray-100 justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer ';
  const tabcCSSNonActive = 'inline-flex items-center bg-white justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white';
  return (
    <ToggleGroup.Root
      className={
        'inline-flex items-center bg-white justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer'
      }
      type="single"
      value={language}
    >
      {(languages).map((lang) => {
        return (
          <ToggleGroup.Item
          className={lang === language ? tabcCSSActive: tabcCSSNonActive }            
          disabled={language === lang}
            key={lang}
            onClick={() => {
              setLanguage({
                language: language === 'English' ? 'Spanish' : 'English',
              });
            }}
            value={lang}
          >
            <>
            <span className='mr-2 align-middle'>
            <LanguageIcon language={lang} />
            </span>
            <span>
            {lang}
            </span>
            </>
          </ToggleGroup.Item>
        );
      })}
    </ToggleGroup.Root>
  );
};
