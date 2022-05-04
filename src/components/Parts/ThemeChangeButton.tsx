import { useTheme } from 'next-themes';

export default function ThemeChangeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      className='bg-blue-500 py-2 px-4 text-white hover:bg-blue-700 dark:text-white'
    >
      {`Change Theme`}
    </button>
  );
}
