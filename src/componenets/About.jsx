import image from '../assets/about.webp'

const About = () => {
    return (
        <>
        <div id='about' className='w-full mt-10 pt-20 md:pt-16 py-10 dark:bg-gray-900  bg-gray-100 '>
            <p className='mb-20 mt-0 md:mt-16 mx-auto w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-4 font-semibold py-1 rounded-full'>About me</p>


            <div className="flex flex-col  sm:flex-row items-center sm:items-start justify-start   gap-2 px-2 md:px-10 lg:px-20 my-10">

                <div className="flex-grow-0 mx-auto     sm:flex-grow flex-shrink-0 mt-0 ml-0 sm:ml-10 mr-0  sm:mr-9  sm:mt-2 flex justify-start items-center ">

                    <div className="bg-gray-200 dark:bg-gray-700  px-2 sm:px-0 pb-2 sm:pb-0">
                        <div className="w-[280px] md:w-[280px] lg:w-[350px]  mb-0 sm:mb-6 pl-0 sm:pl-6 mr-0 sm:-mr-8 ">
                            <img src={image} className="  -mt-6 sm:-mt-10 border-4     md:border-[6px] border-gray-50 dark:border-gray-900" alt="Profile Image" srcSet="" />
                        </div>
                    </div>

                </div>

                <div className='flex-grow-[2] px-2 mx-auto max-w-[600px]  flex flex-col gap-4 justify-start mt-4 sm:-mt-10 '>
                    <h3 className='text-[28px] font-bold'>Curious about me? Here you have it:</h3>
                    <p className=' text-gray-600  text-justify dark:text-gray-200'> 
                        I'm a passionate Developer who specializes in Front End development (React.js & Next.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.<br/><br/>
                        I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, after 3 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, React.js, Tailwindcss and much more.<br/><br/>
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.<br/><br/>
                        When I'm not in full-on developer mode, you can find me hovering around on LinkedIn, witnessing the journey of early startups or enjoying some free time. You can follow me on <a className='font-semibold underline' target='_blank' href='https://www.linkedin.com/in/ghulam-suleman/' >LinkedIn</a> where I share tech-related bites and build in public, or you can follow me on <a className='font-semibold underline' target='_blank' href='https://github.com/Suleman615'>GitHub</a>.<br/><br/>
                        One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉                    </p>
                   
                </div>

            </div>
        </div>
        </>
    )
}

export default About