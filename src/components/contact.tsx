import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation('global');
  return (
    <div className="bg-gray-800 text-white h-screen">    
      <div className="container mx-auto text-white">
        <div className='text-center md:text-5xl text-4xl font-semibold pt-32 uppercase'>
            {t('navbar.contact')}
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-24 h-1.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
