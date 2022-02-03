import { Icon } from "@mdi/react";
import { mdiChevronDoubleUp } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiEmail } from '@mdi/js';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-400 p-20">
        <a href="#home" className="bg-pink-700 h-12 w-12 absolute top-0 left-1/2 -mt-6 -ml-6 flex items-center justify-center">
            <Icon path={mdiChevronDoubleUp} color="white"></Icon>
        </a>
        <div className='flex justify-center'>
            <a href="https://www.linkedin.com/in/ggutierrezcampo/" target="_blank" className='bg-gray-700 p-2 mx-10 cursor-pointer hover:bg-teal-400 transform transition duration-300 hover:scale-90'>
                <Icon path={mdiLinkedin} color="white" size={1.5}></Icon>
            </a>
            <a href="https://github.com/GermanGutierrezCampo/" target="_blank" className='bg-gray-700 p-2 mx-10 cursor-pointer hover:bg-teal-400 transform transition duration-300 hover:scale-90'>
                <Icon path={mdiGithub} color="white" size={1.5}></Icon>
            </a>
            <a href="mailto:germangutierrezcampo@gmail.com" target="_blank" className='bg-gray-700 p-2 mx-10 cursor-pointer hover:bg-teal-400 transform transition duration-300 hover:scale-90'>
                <Icon path={mdiEmail} color="white" size={1.5}></Icon>
            </a>
        </div>
        <div>
            <span className='text-center mt-10 block'>Germán Gutiérrez</span>
        </div>
            
    </footer>
    );
}
