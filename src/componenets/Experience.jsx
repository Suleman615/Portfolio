import { useState , useEffect} from 'react';
import bytewise_light from '../assets/experience-Organizations/bytewise.webp'
import bytewise_dark from '../assets/experience-Organizations/bytewise_white.webp'
import fastTech from '../assets/experience-Organizations/fastech_systems_logo.webp'
import digitenic from '../assets/experience-Organizations/digitenic_logo.png'


const Experience = () => {
   




    const experience = [
        {
            logo_light: digitenic,
            logo_dark: digitenic,
            start_date: 'Aug 2024',
            end_date: 'Mar 2025',
            title: 'front-End Developer',
            learnings: [
                'Developed and maintained scalable web applications with React and Tailwind CSS.',
                'Integrated REST APIs and ensured responsive design across various devices.',
                'Contributed to performance optimization, bug fixing, and UI enhancements in ongoing projects.'
            ]
        },
        {
            logo_light: bytewise_light,
            logo_dark: bytewise_dark,
            start_date: 'Jun 2024',
            end_date: 'Sept 2024',
            title: 'React And Next Js Fellow',
            learnings: [
                'Built multiple front-end components using React and Next.js as part of a mentorship program.',
                'Gained hands-on experience in dynamic routing, Static Site Generation (SSG), and API integration.',
                'Collaborated in peer code reviews and followed Git version control best practices.'
            ]
        },
        {
            logo_light:fastTech,
            logo_dark: fastTech,
            start_date: 'Jun 2023',
            end_date: 'Aug 2023',
            title: 'Front End Developer - Intern',
            learnings: [
                'Collaborated with the design team to implement responsive UIs using HTML, CSS, and JavaScript.',
                'Worked on optimizing existing web pages for performance and mobile compatibility.',
                'Gained experience in cross-browser compatibility and code debugging.'
            ]
        },
       
    ]


    return (
        <div id="experience" className='py-20  dark:bg-gray-900  bg-gray-100'>

            <p className='mb-4 mt-0 md:mt-16 mx-auto w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-4 font-semibold py-1 rounded-full'>Experience</p>
            <p className='w-fit text-xl mx-auto px-2 text-center'>Here is a quick summary of my most recent experiences:</p>
            <div className='my-10 flex flex-col gap-10'>
                {experience.map((item, key) => (<div key={key} className='flex flex-col sm:flex-row gap-3 sm:gap-10 shadow-lg text-gray-600   dark:text-gray-200 shadow-gray-300 dark:shadow-gray-950 bg-white dark:bg-gray-800  w-[90%] sm:w-fit mx-auto p-6 rounded-lg'>
                    <div>
                        <img src={item.logo_dark} className='w-[100px] hidden dark:block ' alt="logo"  />
                        <img src={item.logo_light} className='w-[100px] block dark:hidden' alt="logo"  />

                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col-reverse sm:flex-row text-gray-950 dark:text-gray-200 justify-between gap-3 sm:gap-40'>
                            <p className='font-bold'>{item.title}</p> <p className='font-thin'>{item.start_date} - {item.end_date}</p>
                        </div>
                        <ul className='list-disc list-inside'>
                            {item.learnings.map((item, key) => (<li key={key}>{item}</li>))}
                        </ul>
                    </div>
                </div>))}
            </div>
        </div>
    )
}


export default Experience;