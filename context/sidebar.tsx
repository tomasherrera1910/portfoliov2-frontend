import { ReactNode, RefObject, createContext, useRef } from 'react'

interface Children {
  children: ReactNode
}
interface SidebarContextType {
  aboutMeRef: RefObject<HTMLElement>
  skillsRef: RefObject<HTMLElement>
  projectsRef: RefObject<HTMLElement>
  educationRef: RefObject<HTMLElement>
  contactMeRef: RefObject<HTMLElement>
}

export const SidebarContext = createContext<SidebarContextType>({
  aboutMeRef: { current: null },
  skillsRef: { current: null },
  projectsRef: { current: null },
  educationRef: { current: null },
  contactMeRef: { current: null }
})

export function SidebarProvider ({ children }: Children) {
  const aboutMeRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const contactMeRef = useRef<HTMLElement>(null)
  return (
    <SidebarContext.Provider value={{
      aboutMeRef,
      skillsRef,
      projectsRef,
      educationRef,
      contactMeRef
    }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
