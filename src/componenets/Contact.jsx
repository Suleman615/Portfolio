import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";


const Contact = () => {




    return (
        <div id="contact" className="pt-20">
        <p  className='  mx-auto w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-4 font-semibold py-1 rounded-full '>Get In Touch</p>

        <div  className=' pb-10 flex flex-col md:flex-row justify-around px-2 mt-10 md:px-20'>
            <div className="flex-1">
                <p className='w-fit text-xl max-w-[500px]  px-2  text-center md:text-start'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

                <div className="flex flex-col gap-4 my-10 px-2">
                    <div className="flex gap-4 items-center md:item-start w-full mx-auto"> <MdMailOutline size={32} /><p className="text-xl sm:text-2xl  font-semibold ">ghlmsuleman@gmail.com</p></div>
                    <div className="flex gap-4 items-center md:items-start w-full mx-auto"> <IoCallOutline size={32} /><p className="text-2xl font-semibold ">+92 332 6617519</p></div>

                </div>
                <div className="flex gap-4 my-6 w-fit px-2">
                    <a target="_blank" href="https://github.com/Suleman615" title="Github"><FiGithub size={28} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/ghulam-suleman/" title="LinkedIn"><PiLinkedinLogo size={28} /></a>

                </div>
            </div>
            <div className=" flex-1">
                <form 
                 action="https://formsubmit.co/ghlmsuleman@gmail.com" 
                 method="post"
                 className="border border-gray-700/80 p-5 rounded-lg flex flex-col gap-4 ">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700  dark:text-gray-200  " htmlFor="name">Name:</label>
                        <input className="rounded-md text-xl ps-1 py-1 bg-gray-300 dark:bg-gray-700 focus:outline-0 focus:ring-1 ring-gray-400" type="text" id="name" name="name" required/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700  dark:text-gray-200  " htmlFor="email">Email:</label>
                        <input className="rounded-md text-xl ps-1 py-1 bg-gray-300 dark:bg-gray-700 focus:outline-0 focus:ring-1 ring-gray-400" type="email" id="email" name="email" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700  dark:text-gray-200  " htmlFor="message">Message:</label>
                        <textarea className="rounded-md text-xl ps-1 py-1 bg-gray-300 dark:bg-gray-700 focus:outline-0 focus:ring-1 ring-gray-400" id="message" name="message" rows="5" required></textarea>
                    </div>

                    {/* {Honeypot (anti-spam) } */}
                    <input type="text" name="_honey"  className="hidden" />

                    {/* CAPTCHA */}
                    <input  type="hidden" name="_captcha" value='false' />

                    {/* Success page redirect  */}
                    <input type="hidden" name="_next" value="https://ghulam-suleman.vercel.app" />

                    <button className="bg-gray-200 py-2 rounded-md text-gray-700 border  dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-400" type="submit">Send Message</button>
                </form>
            </div>

        </div>
        </div>

    )
}

export default Contact;