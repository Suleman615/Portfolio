import javascript from '../assets/icons/icon-javascript.svg'
import typescript from '../assets/icons/icon-typescript.svg'
import react from '../assets/icons/icon-react.svg'
import next from '../assets/icons/icon-nextjs.svg'
import tailwind from '../assets/icons/icon-tailwindcss.svg'
import git from '../assets/icons/icon-git.svg'
import html from '../assets/icons/icon-html.svg'
import css from '../assets/icons/icon-css.svg'
import bootstrap from '../assets/icons/icon-bootstrap.svg'
import vs_code from '../assets/icons/icon-visual-studio-code.svg'
import intelliJ from '../assets/icons/icons-intellij-idea.svg'

const Skills = () => {
    const skill = [
        {
            name: 'HTML 5',
            icon: html
        },
        {
            name: 'CSS 3',
            icon: css
        },
        {
            name: 'Tailwind CSS',
            icon: tailwind
        },
        {
            name: 'BootStrap CSS',
            icon: bootstrap
        },
        {
            name: 'JavaScript',
            icon: javascript
        },
        {
            name: 'TypeScript',
            icon: typescript
        },
        {
            name: 'React Js',
            icon: react
        },
        {
            name: 'Next Js',
            icon: next
        },
        {
            name: 'Git',
            icon: git
        },
        {
            name: 'intellij IDEA',
            icon: intelliJ
        },
        {
            name: 'Visual Studio Code',
            icon: vs_code
        },


    ]

    return (
        <>
            <div id='skills' className=' min-h-[100vh] flex flex-col justify-center' >
                <p className='mb-4 mt-20 mx-auto w-fit bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-4 font-semibold py-1 rounded-full '>Skills</p>
                <p className='w-fit text-xl mx-auto px-2 text-center'>The skills, tools and technologies I am really good at:</p>

                <div className='flex flex-wrap justify-center items-start gap-20 px-2 md:px-40 py-20'>
                    {skill.map((item, key) => (<div key={key} className='flex flex-col items-center justify-between gap-4'>
                        <img className='w-16 h-16' src={item.icon} alt="icon" />
                        <p className='text-center font-semibold'>{item.name}</p>
                    </div>))}
                </div>
            </div>
        </>
    )
}


export default Skills