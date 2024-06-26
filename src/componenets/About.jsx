import image from '../assets/about.jpeg'

const About = () => {
    return (
        <>
        <div id='about' className='w-full my-20 py-10 dark:bg-gray-900  bg-gray-100'>
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
                    <p className=' text-gray-600  text-justify dark:text-gray-200'>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default About