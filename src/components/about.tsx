import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation('global');
  return (
    <div className="container mx-auto">
      <div className='text-center text-5xl text-gray-600 font-semibold mt-32 uppercase'>
          {t('navbar.about')}
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1.5 bg-gray-600"></div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-red-600 rounded-full">
          </div>
          <div className="block">Title</div>
          <div className="text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-red-600 rounded-full">
          </div>
          <div className="block">Title</div>
          <div className="text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-red-600 rounded-full">
          </div>
          <div className="block">Title</div>
          <div className="text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-red-600 rounded-full">
          </div>
          <div className="block">Title</div>
          <div className="text-center">
            text with long description about something text with long description about something
          </div>
        </div>
      </div>

    </div>
  );
}
