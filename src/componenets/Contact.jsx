import { MdMailOutline } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";


const Contact = () => {


    

    return (
        <>
            <div id="contact" className=' min-h-[100vh] flex flex-col justify-center'>
                <p className='mb-4 mt-20 mx-auto w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-4 font-semibold py-1 rounded-full  '>Get In Touch</p>
                <p className='w-fit text-xl max-w-[600px] mx-auto px-2 text-center'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

                <div className="flex flex-col gap-4 my-10">
                    <div className="flex gap-4 items-center w-fit mx-auto"> <MdMailOutline size={32} /><p className="text-xl sm:text-3xl  font-semibold mb-3">ghlmsuleman@gmail.com</p></div>
                    <div className="flex gap-4 items-center w-fit mx-auto"> <IoCallOutline size={32} /><p className="text-3xl font-semibold mb-3">+92 332 6617519</p></div>

                </div>
                <p className='w-fit text-xl max-w-[600px] mx-auto px-2 text-center'>You may also find me on these platforms!</p>
                <div className="flex gap-4 my-6 w-fit mx-auto">
                    <a target="_blank" href="https://github.com/Suleman615"><FiGithub size={28} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/ghulam-suleman/"><PiLinkedinLogo size={28} /></a>

                </div>
            </div>
        </>
    )
}

export default Contact;