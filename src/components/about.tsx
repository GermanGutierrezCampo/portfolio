import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation('global');
  return (
    <div className="container mx-auto text-gray-600">
      <div className='text-center text-5xl font-semibold mt-32 uppercase'>
          {t('navbar.about')}
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1.5 bg-gray-600"></div>
      </div>
      <div className="flex mt-32">
        <div className="flex flex-col mx-4 items-center">
          <div className="w-32 h-32 bg-teal-400 rounded-full">
          </div>
          <strong className="block text-3xl mt-4">Title</strong>
          <div className="text-lg text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col mx-4 items-center">
          <div className="w-32 h-32 bg-teal-400 rounded-full">
          </div>
          <strong className="block text-3xl mt-4">Title</strong>
          <div className="text-lg text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col mx-4 items-center">
          <div className="w-32 h-32 bg-teal-400 rounded-full">
          </div>
          <strong className="block text-3xl mt-4">Title</strong>
          <div className="text-lg text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col mx-4 items-center">
          <div className="w-32 h-32 bg-teal-400 rounded-full">
          </div>
          <strong className="block text-3xl mt-4">Title</strong>
          <div className="text-lg text-center">
            text with long description about something text with long description about something
          </div>
        </div>
      </div>

    </div>
  );
}
