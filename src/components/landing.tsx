import { useTranslation } from 'react-i18next';
import { DynamicParticles } from './dynamic-particles';

export function Landing() {
  const { t } = useTranslation('global');
  return (
    <div id='home' className='relative bg-gray-800 h-screen'>
      <div className="absolute grid place-items-center left-0 right-0 h-screen">
        <div className='text-center text-white text-5xl font-semibold	z-10'>
          <p>{t('landing.title')} <span className='text-pink-600'>Germán Gutiérrez</span>.</p>
          <p>{t('landing.subtitle')}</p>
          <button className='mt-5 text-3xl bg-transparent hover:bg-teal-400 py-2 px-4 border border-white rounded
          hover:border-transparent'>{t('landing.button')} &rarr;</button>
        </div>

      </div>
      <DynamicParticles />
    </div>
  );
}
