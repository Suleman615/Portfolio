import profile from "../assets/profile.jpeg"
import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";




const Hero = () => {

    return (
        <div className="flex  flex-col-reverse sm:flex-row  pt-28 w-full h-auto  px-2 sm:px-10 md:px-20">

            {/* left section */} 
            <div className="flex-grow-0 w-fit  mt-10 md:mt-0  sm:flex-grow-[2]  flex flex-col px-2 lg:pr-20 gap-3 justify-center" >
                <h3 className="text-[44px] font-bold">Ghulam Suleman</h3>
                <p className="text-justify w-auto m md:max-w-[700px] font-semibold">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                <div className="flex gap-6 items-center mt-10">
                    <SlLocationPin size={28} />
                    <p className="font-semibold">Islamabad, Pakistan</p>
                </div>
                <div className="flex gap-6 items-center ml-1">
                <GoDotFill  color="green"/>
                <p className="font-semibold">Available for new Projects</p>
                </div>
                <div className="flex gap-4 mt-10">
                <FiGithub size={28} />
                <PiLinkedinLogo size={28} />

                </div>
            </div>

            {/* right section  */}
            <div className="flex-grow-0 mx-auto  sm:ml-9  sm:flex-grow flex-shrink-0 mt-20 sm:mt-2 flex justify-center items-center ">

                <div className="bg-gray-400 dark:bg-gray-800 px-2 sm:px-0 pb-2 sm:pb-0">
                    <div className="w-[280px]  mb-0 sm:mb-7  ">
                        <img src={profile} className="ml-0 sm:-ml-7  -mt-6 sm:-mt-7 border-4     md:border-[6px] border-white dark:border-gray-950" alt="Profile Image" srcSet="" />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Hero





