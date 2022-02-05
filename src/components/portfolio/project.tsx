import React from 'react';

export default function Project({ item }: any) {
    const { title, description, link, img } = item;
    return (
        <div className="group w-[24rem] h-[19rem] md:w-[30rem] md:h-[24rem] lg:w-[30rem] lg:h-[24rem] relative">
            <img className='absolute top-0 group-hover:invisible' src={ img }></img>
            <h1 className="invisible group-hover:visible">{ title }</h1>
            <h2 className="invisible group-hover:visible">{ description }</h2>
            <a className="invisible group-hover:visible" href={ link }> Visit website</a>
        </div>);
}
