import React from 'react';
import { useTranslation } from 'react-i18next'


// eslint-disable-next-line react/prop-types
function ProjectDetails({ project, onBack }) {

    const [t] = useTranslation("global")

    return (
        <div className='sm:h-screen w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-800 text-white px-12 pt-24'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full items-center">
            <h2 className='text-4xl m-4 font-bold inline border-b-4 border-gray-500'>{t('global.ProjectsDetails.title')}</h2>
                <div className="grid grid-cols-1 gap-8 p-8 w-full  rounded-lg">
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
                        <div className='text-center shadow-lg pt-2 shadow-gray-600 hover:shadow-lg hover:shadow-orange-400 cursor-pointer' onClick={() => window.open(project.github, "_blank")}>
                            <h2 className='text-xl font-bold text-orange-400 mb-4'>{project.name}</h2>
                            <ul>
                                {project.technos.map((techno, index) => (
                                    <li key={index}>{techno}</li>
                                ))}
                            </ul>
                        </div>
                        <div><img src={project.src} alt="Project" className="rounded-md w-full object-cover h-full my-4 sm:my-0 shadow-lg shadow-gray-600 hover:shadow-lg hover:shadow-orange-400 cursor-pointer" onClick={() => window.open(project.href, "_blank")} /></div>
                    </div>
                    <div className='py-8'>
                        <p>{project.resume}</p>

                    </div>
                </div>
                <button onClick={onBack} className="text-white w-fit px-6 py-3 my-2 flex items-center font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:text-orange-300">{t('global.ProjectsDetails.button')}</button>
            </div>
        </div>
    );
}

export default ProjectDetails;
