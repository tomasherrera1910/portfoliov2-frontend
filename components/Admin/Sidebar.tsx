import useSidebar from '../../hooks/useSidebar'
import ButtonSidebar from './ButtonSidebar'
interface Props {
  adminInfoHeight: number
  projectsHeight: number
  skillsHeight: number
}
export function Sidebar ({ adminInfoHeight, projectsHeight, skillsHeight }: Props): JSX.Element {
  const { BUTTONS, activeButton, asideWidth, toggle } = useSidebar(adminInfoHeight, projectsHeight, skillsHeight)
  return (
        <aside className={'h-screen bg-black bg-opacity-25 backdrop-blur-sm fixed top-14 left-0 border-r-[1px] z-10 border-gray-500 flex flex-col items-center ease-linear duration-150 px-4 ' + asideWidth}>
            {BUTTONS.map((info, idx) => (
                <ButtonSidebar
                key={idx}
                handleClick={info.handleClick}
                text={info.text}
                toggle={toggle}
                active={activeButton === info.text ? 'bg-white text-black' : ''}
                icon={toggle ? (info.icon2 ?? info.icon) : info.icon}
                nav={info.nav}
                />
            ))}
        </aside>
  )
}
