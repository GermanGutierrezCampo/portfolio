import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t } = useTranslation('global');
  return (
    <>
      <nav className="sticky top-0 flex bg-gray-900 py-4 z-50">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="block flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto">
          <div className="text-xl uppercase lg:flex-grow max-w-screen-xl">
            <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 ml-8 mr-20">
              {t('navbar.home')}
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-600 mr-20">
              {t('navbar.about')}
            </a>
            <a href="#portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-600 mr-20">
              {t('navbar.portfolio')}
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-600">
              {t('navbar.contact')}
            </a>
          </div>
        </div>
        <div className="h-1 bg-teal-400 w-screen absolute bottom-0"></div>
      </nav>
    </>
  );
}
