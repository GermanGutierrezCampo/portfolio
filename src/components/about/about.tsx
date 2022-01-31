import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quality } from './quality';
import { Skill } from './skill';

export function About() {
  const { t } = useTranslation('global');
  const [qualities, setQualities] = useState([
    {img: '', title: 'title 1', description: 'description 1 description 1 description 1 description 1 description 1 description 1 description 1'},
    {img: '', title: 'title 2', description: 'description 2 description 2 description 2 description 2 description 2 description 2 description 2'},
    {img: '', title: 'title 3', description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3'},
    {img: '', title: 'title 4', description: 'description 4 description 4 description 4 description 4 description 4 description 4 description 4'}
  ]);
  
  const [skills, setSkills] = useState([
    { name: 'css', percentage: 90 },
    { name: 'html', percentage: 80 },
    { name: 'react', percentage: 70 },
    { name: 'angular', percentage: 60 },
    { name: 'typescript', percentage: 90 },
    { name: 'python', percentage: 80 },
    { name: 'design', percentage: 70 },
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
          <strong className="block md:text-3xl text-2xl mt-4"> Who's this guy</strong>
          <div className="md:text-lg text-sm text-center">
              description description description description description description description description description description description description description
              description description description description description description description description description description description description description
          </div>
        </div>
        <div className="flex flex-col">
          {skills.map((skill) => <Skill key={skill.name} item={skill}></Skill>)}
        </div>
      </div>
    </div>
  );
}
