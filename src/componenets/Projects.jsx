
import { LuExternalLink } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

import image1 from '../assets/profile.webp'

const Projects = () => {

    const projects = [
        {
            name: 'My Projects',
            Preview: image1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
            Skills: ['React Js', 'Next Js', 'Tailwind CSS', 'JavaScript', 'TypeScript',],
            live_link: '',
            source_code: ''
        },
        {
            name: 'My Projects',
            Preview: '',
            description: '',
            Skills: ['React Js', 'Next Js', 'Tailwind CSS', 'JavaScript', 'TypeScript',],
            live_link: '',
            source_code: ''
        },
        {
            name: 'My Projects',
            Preview: '',
            description: '',
            Skills: ['React Js', 'Next Js', 'Tailwind CSS', 'JavaScript', 'TypeScript',],
            live_link: '',
            source_code: ''
        },
        {
            name: 'My Projects',
            Preview: '',
            description: '',
            Skills: ['React Js', 'Next Js', 'Tailwind CSS', 'JavaScript', 'TypeScript',],
            live_link: '',
            source_code: ''
        },
        {
            name: 'My Projects',
            Preview: '',
            description: '',
            Skills: ['React Js', 'Next Js', 'Tailwind CSS', 'JavaScript', 'TypeScript',],
            live_link: '',
            source_code: ''
        },
        {
            name: 'My Projects',
            Preview: '',
            description: '',
            Skills: ['React Js', 'Next Js', 'Tailwind CSS', 'JavaScript', 'TypeScript',],
            live_link: '',
            source_code: ''
        },

    ]

    return (
        <>
            <div id="projects" className=' min-h-[100vh] flex flex-col justify-center'>
                <p className='mb-4 mt-20 mx-auto w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-4 font-semibold py-1 rounded-full  '>Projects</p>
                <p className='w-fit mx-auto px-2 text-center'>Some of the noteworthy projects I have built:</p>


                {/* Prijects */}
                <div>
                    {
                        projects.map((item, key) => (<div key={key} className={`flex  flex-col ${(key % 2 === 0) ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-5  w-[90%] sm:w-[90%] md:w-[80%]  shadow-md dark:shadow-gray-900 rounded-xl  dark:bg-gray-900 mx-auto my-20`}>
                            <div className={`w-[100%]  sm:w-[50%] flex-shrink-0 p-8 bg-gray-100 dark:bg-gray-800 rounded-t-xl ${(key % 2 === 0) ? 'sm:rounded-l-xl sm:rounded-r-none' : 'sm:rounded-r-xl sm:rounded-l-none'}  `}>
                                <img className='rounded-xl w-full' src={image1} alt="preview" />
                            </div>
                            <div className='p-8 flex flex-col gap-8'>
                                <h3 className='font-bold text-4xl '>{item.name}</h3>
                                <p className='font-semibold'>{item.description}</p>
                                <div className='flex gap-5 flex-wrap'>
                                    {item.Skills.map((item, key) => (<p key={key} className='px-3 py-1 rounded-full  bg-gray-200 dark:bg-gray-700 dark:text-gray-200 w-fit'>{item}</p>))}

                                </div>
                                <div className="flex gap-10">
                                    <a target='_blank' href={item.live_link} title="Live Link"><LuExternalLink size={34} /></a>
                                    <a target='_blank' href={item.source_code} title="source_code"><FaCode size={34} /></a>

                                    </div>

                            </div>
                        </div>))
                    }
                </div>

            </div>
        </>
    )
}


export default Projects;