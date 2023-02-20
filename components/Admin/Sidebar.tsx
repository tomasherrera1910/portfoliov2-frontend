
import { SidebarProps } from '../../hooks/useSidebar'
import ButtonSidebar from './ButtonSidebar'

export function Sidebar ({ adminHeight, projectsHeight, skillsHeight, BUTTONS, activeButton, toggle }: Partial<SidebarProps>): JSX.Element {
  const asideWidth = toggle ?? false ? 'w-40' : 'w-6 min-[600px]:w-12'

  return (
        <aside className={'h-screen bg-black bg-opacity-25 backdrop-blur-sm fixed top-14 left-0 border-r-[1px] z-10 border-gray-500 flex flex-col items-center ease-linear duration-150 px-4 ' + asideWidth}>
            {BUTTONS?.map((info, idx) => (
                <ButtonSidebar
                key={idx}
                handleClick={info.handleClick}
                text={info.text}
                toggle={toggle ?? false}
                active={activeButton === info.text ? 'bg-white text-black' : ''}
                icon={toggle ?? false ? (info.icon2 ?? info.icon) : info.icon}
                nav={info.nav}
                />
            ))}
        </aside>
  )
}
