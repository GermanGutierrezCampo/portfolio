import { useTranslation } from 'react-i18next';

export function Landing() {
  const { t } = useTranslation('global');
  return (
    <>
      <div>{t('landing.title')}</div>
      <div>{t('landing.subtitle')}</div>
    </>
  );
}
