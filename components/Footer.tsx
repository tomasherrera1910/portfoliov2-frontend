import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer (): JSX.Element {
  return (
        <footer className="bg-[#111] text-white py-2 flex flex-col items-center font-roboto">
            <section className="flex max-w-3xl items-center justify-center">
                <div className="flex flex-col gap-2">
                <p className="flex text-sm gap-1 text-gray-300 items-center justify-center flex-wrap">Designed and developed by
                    <a href="https://www.linkedin.com/in/mauro-tomas-herrera/" target="_blank" rel="noreferrer" className="text-white font-bold text-base hover:underline">Tomás Herrera</a>
                    <span className="font-barlow font-semibold text-xs">2022-2023</span>
                </p>
                <nav className="flex justify-around items-center">
                    <a
                    href="https://www.linkedin.com/in/mauro-tomas-herrera/" target="_blank" rel="noreferrer"
                    className='border-[1px] rounded-full p-2 duration-300 ease-in-out cursor-pointer bg-blue-600 text-white border-white grayscale hover:grayscale-0 hover:scale-110'>
                        <FontAwesomeIcon icon={faLinkedinIn as IconProp} className='w-4'/>
                    </a>
                    <a
                    href="https://www.github.com/tomasherrera1910" target="_blank" rel="noreferrer"
                    className='border-[1px] rounded-full p-2 duration-300 ease-in-out cursor-pointer bg-white text-black border-black grayscale hover:grayscale-0 hover:scale-110'>
                        <FontAwesomeIcon icon={faGithub as IconProp} className='w-4'/>
                    </a>
                    <a className='border-[1px] rounded-full p-2 duration-300 ease-in-out cursor-pointer bg-red-900 text-white border-white grayscale hover:grayscale-0 hover:scale-110'>
                        <FontAwesomeIcon icon={faFilePdf as IconProp} className='w-4'/>
                    </a>
                </nav>
                </div>
            </section>
        </footer>
  )
}
