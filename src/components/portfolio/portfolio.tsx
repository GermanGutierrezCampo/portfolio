import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Project from './project';

export function Portfolio() {
  const { t } = useTranslation('global');
  const [projects, setProjects] = useState([
    {title: 'Volotea', description: 'Volotea website', link: 'volotea.com', img:'/assets/images/Volotea.PNG'},
    {title: 'Volotea', description: 'Volotea website', link: 'volotea.com', img:'/assets/images/Volotea.PNG'},
    {title: 'Volotea', description: 'Volotea website', link: 'volotea.com', img:'/assets/images/Volotea.PNG'},
    {title: 'Volotea', description: 'Volotea website', link: 'volotea.com', img:'/assets/images/Volotea.PNG'},
    {title: 'Volotea', description: 'Volotea website', link: 'volotea.com', img:'/assets/images/Volotea.PNG'},
    {title: 'Volotea', description: 'Volotea website', link: 'volotea.com', img:'/assets/images/Volotea.PNG'}
  ])

  return (
    <div className='bg-gray-100'>
      <div id="portfolio" className="container mx-auto text-gray-600 py-32">
        <div className='text-center md:text-5xl text-4xl font-semibold uppercase'>
            {t('portfolio.projects')}
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-24 h-1.5 bg-gray-600"></div>
        </div>
        <div className="flex flex-wrap justify-center mt-32">
          {projects.map( project => <Project key={project.title} item={project}></Project>)}
        </div>
      </div>
    </div>
  );
}
