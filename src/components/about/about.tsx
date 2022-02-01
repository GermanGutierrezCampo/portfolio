import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quality } from './quality';
import { Skill } from './skill';
import { mdiCellphoneLink } from '@mdi/js';
import { mdiSpeedometer } from '@mdi/js';
import { mdiLightbulbOutline } from '@mdi/js';
import { mdiRocketLaunch } from '@mdi/js';


export function About() {
  const { t } = useTranslation('global');
  const [qualities, setQualities] = useState([
    {img: mdiSpeedometer, title: 'about.fast_title', description: 'about.fast_description'},
    {img: mdiCellphoneLink, title: 'about.responsive_title', description: 'about.responsive_description'},
    {img: mdiLightbulbOutline, title: 'about.intuitive_title', description: 'about.intuititve_description'},
    {img: mdiRocketLaunch, title: 'about.dynamic_title', description: 'about.dynamic_description'}
  ]);
  
  const [skills, setSkills] = useState([
    { name: 'Angular', percentage: 90 },
    { name: 'React', percentage: 80 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'Python', percentage: 70 },
    { name: '.NET', percentage: 60 },
    { name: 'SQL', percentage: 60 },
    { name: 'Data Science', percentage: 60 },
    { name: 'UI Design', percentage: 50 },
  ]);

  return (
    <div id="about" className="container mx-auto text-gray-600 mb-32 pt-32">
      <div className='text-center md:text-5xl text-4xl font-semibold uppercase'>
          {t('navbar.about')}
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1.5 bg-gray-600"></div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 mt-32">
        {qualities.map((quality) => <Quality key={quality.title} item={quality}></Quality>)}
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-32">
        <div className="flex flex-col items-center mt-2">
          <div className="md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full"></div>
          <strong className="block md:text-3xl text-2xl mt-4"> {t('about.me_title')}</strong>
          <div className="md:text-lg text-sm text-center">
            {t('about.me_description')}
          </div>
        </div>
        <div className="flex flex-col">
          {skills.map((skill) => <Skill key={skill.name} item={skill}></Skill>)}
        </div>
      </div>
    </div>
  );
}
