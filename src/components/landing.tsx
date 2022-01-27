import { useTranslation } from 'react-i18next';
import { DynamicParticles } from './dynamic-particles';

export function Landing() {
  const { t } = useTranslation('global');
  return (
    <div className='relative bg-gray-800 h-screen w-screen'>
      <div className="absolute grid place-items-center h-screen w-screen">
        <div className='text-center text-white text-5xl font-semibold	z-10'>
          <p>{t('landing.title')} <span className='text-pink-600'>Germán Gutiérrez</span>.</p>
          <p>{t('landing.subtitle')}</p>
          <button className='mt-5 text-4xl bg-transparent hover:bg-teal-400 font-semibold py-2 px-4 border border-white 
          hover:border-transparent rounded'>{t('landing.button')} &rarr;</button>
        </div>

      </div>
      <DynamicParticles />
    </div>
  );
}
