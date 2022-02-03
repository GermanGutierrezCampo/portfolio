import { useTranslation } from 'react-i18next';
import { DynamicParticles } from './dynamic-particles';
import { Icon } from "@mdi/react";
import { mdiArrowRight } from '@mdi/js';

export function Landing() {
  const { t } = useTranslation('global');
  return (
    <div id='home' className='relative bg-gray-800 h-screen'>
      <div className="absolute place-items-center left-0 right-0 h-screen text-white">
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='text-center text-5xl font-semibold	z-10'>
            <p>{t('landing.title')} <span className='text-pink-600'>Germán Gutiérrez</span>.</p>
            <p>{t('landing.subtitle')}</p>
          </div>
          <button className='mt-5 text-3xl bg-transparent hover:bg-teal-400 py-2 px-4 border border-white rounded
          hover:border-transparent flex items-center group'>{t('landing.button')} <Icon className='group-hover:rotate-90 transition duration-300' path={mdiArrowRight} color="white" size={1}></Icon> </button>
        </div>

      </div>
      <DynamicParticles />
    </div>
  );
}
