import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation('global');
  return (
    <div className="container mx-auto text-gray-600">
      <div className='text-center md:text-5xl text-4xl font-semibold mt-32 uppercase'>
          {t('navbar.about')}
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1.5 bg-gray-600"></div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 mt-32">
        <div className="flex flex-col mx-4 items-center">
          <div className="md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full">
          </div>
          <strong className="block md:text-3xl text-2xl mt-4">Title</strong>
          <div className="md:text-lg text-sm text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col mx-4 items-center">
          <div className="md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full">
          </div>
          <strong className="block md:text-3xl text-2xl mt-4">Title</strong>
          <div className="md:text-lg text-sm text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col mx-4 items-center">
          <div className="md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full">
          </div>
          <strong className="block md:text-3xl text-2xl mt-4">Title</strong>
          <div className="md:text-lg text-sm text-center">
            text with long description about something text with long description about something
          </div>
        </div>
        
        <div className="flex flex-col mx-4 items-center">
          <div className="md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full">
          </div>
          <strong className="block md:text-3xl text-2xl mt-4">Title</strong>
          <div className="md:text-lg text-sm text-center">
            text with long description about something text with long description about something
          </div>
        </div>
      </div>

    </div>
  );
}
