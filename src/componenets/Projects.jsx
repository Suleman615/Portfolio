
import { LuExternalLink } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

import villa_agency from '../assets/project-Preview/villa-agency.webp';
import car_rent from '../assets/project-Preview/car-rent.webp';
import e_commerce from '../assets/project-Preview/e-commerce.webp';
import furniro_furniture from '../assets/project-Preview/furnirofurniture.webp';
import result_summery from '../assets/project-Preview/result-summery.webp';
import social_app from '../assets/project-Preview/social-app.webp';
import tailwind from '../assets/project-Preview/tailwind.webp';
import tic_tac_toe from '../assets/project-Preview/tic-tac-toe.webp';
import weather from '../assets/project-Preview/weather.webp';
import dashboard from '../assets/project-Preview/dashboard.webp';


const Projects = () => {

    const projects = [
        {
            name: 'Villa Agency',
            Preview: villa_agency,
            description: 'A dynamic villa agency was built using HTML, Tailwind CSS, and ReactJS. The website displays a collection different Properties of multiple categories ',
            Skills: ['React Js', 'Tailwind CSS', 'JavaScript', ],
            live_link: 'https://villa-agency.vercel.app/',
            source_code: 'https://github.com/Suleman615/villa-agency'
        },
        {
            name: 'Furniro Furniture',
            Preview: furniro_furniture,
            description: 'An online furniture store  was built using a combination of Next Js, Tailwind CSS, and TypeScript. The website offers the functionality to view multiple  products from a collection of products and add to cart',
            Skills: [ 'Next Js', 'Tailwind CSS',  'TypeScript'],
            live_link: 'https://furnirofurniture.vercel.app/',
            source_code: 'https://github.com/Suleman615/Furniro'
        },
        {
            name: 'Dashbord',
            Preview: dashboard,
            description: 'A dashboard  being built using a combination of HTML, Tailwind CSS, React and JavaScript. The website will help user to create their accounts and add products to their shops ',
            Skills: ['React Js', 'Tailwind CSS', 'JavaScript'],
            live_link: 'https://dashboard-furniro.vercel.app/',
            source_code: 'https://github.com/Suleman615/Dashboard'
        },
        {
            name: 'CAR Rent',
            Preview: car_rent,
            description: 'A dynamic website was built using a combination of HTML, Tailwind CSS, NextJs and Typescript. Car API from RapidAPI was used. The website offers different cars available for rent.',
            Skills: [ 'Next Js', 'Tailwind CSS',  'TypeScript',],
            live_link: 'https://rent-car-services.vercel.app/',
            source_code: 'https://github.com/Suleman615/Car-Rent'
        },
        
        {
            name: 'Weather App',
            Preview: weather,
            description: 'A weather app was built using a combination of HTML, Tailwind CSS, React and JavaScript. A user can search a desired location to view the current weather and also temperature of coming days. An API from Rapid API was used for data',
            Skills: ['React Js',  'Tailwind CSS', 'JavaScript',],
            live_link: 'https://weather-app-suleman615.vercel.app/',
            source_code: 'https://github.com/Suleman615/Weather-App'
        },
        {
            name: 'E-Commerce',
            Preview: e_commerce,
            description: ' A dynamic e-commerce website was built using a combination of HTML, Bootstrap CSS, and JavaScript. The website offers the functionality to select any product from a collection of products and add to cart',
            Skills: ['React Js',  'Bootstrap CSS', 'JavaScript'],
            live_link: 'https://e-commerce-suleman615.vercel.app/',
            source_code: 'https://github.com/Suleman615/E-commerce'
        },
        {
            name: 'Social App',
            Preview: social_app,
            description: 'A social was cloned   using a combination of HTML,  CSS, React and JavaScript. The website shows the details of user , friends and recent contacts ',
            Skills: ['React Js', 'CSS 3', 'JavaScript'],
            live_link: 'https://social-app-suleman615.vercel.app/profile',
            source_code: 'https://github.com/Suleman615/Social-App'
        },
        {
            name: 'Tailwind',
            Preview: tailwind,
            description: 'Starting page of tailwind CSS official website was cloned using HTML and TAilwind CSS to for practice purpose',
            Skills: ['React Js', 'Tailwind CSS', 'JavaScript', ],
            live_link: 'https://tailwind-clone-nine.vercel.app/',
            source_code: 'https://github.com/Suleman615/Tailwind-Clone'
        },
        {
            name: 'Tic Tac Toe',
            Preview: tic_tac_toe,
            description: 'A Tia Tac Toa game was built  using a combination of HTML,  CSS, React and JavaScript. where two users can play simultenuously . It displays the score of each win as well',
            Skills: ['React Js', 'Tailwind CSS', 'JavaScript', ],
            live_link: 'https://tic-tac-toe-one-red.vercel.app/',
            source_code: 'https://github.com/Suleman615/Tic-Tac-To'
        },
        {
            name: 'Result Summery',
            Preview: result_summery,
            description: 'A FrontendMentor was  built using a combination of HTML and Tailwind CSS. Goal was to built a pixel perfect component of a result summery',
            Skills: ['HTML', 'Tailwind CSS', ],
            live_link: 'https://front-end-suleman615.vercel.app/',
            source_code: 'https://github.com/Suleman615/FrontEnd'
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
                                <img className='rounded-xl w-full' src={item.Preview} alt="preview" />
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