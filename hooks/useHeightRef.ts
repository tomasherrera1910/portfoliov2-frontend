import { MutableRefObject, useEffect, useRef, useState } from 'react'

interface returnHook {
  adminHeight: number
  projectsHeight: number
  skillsHeight: number
  adminInfoRef: MutableRefObject<HTMLDivElement | undefined>
  projectsRef: MutableRefObject<HTMLDivElement | undefined>
  skillsRef: MutableRefObject<HTMLDivElement | undefined>
}
const useHeightRef = (): returnHook => {
  const adminInfoRef = useRef<HTMLDivElement>()
  const projectsRef = useRef<HTMLDivElement>()
  const skillsRef = useRef<HTMLDivElement>()
  const [adminHeight, setAdminHeight] = useState(0)
  const [projectsHeight, setProjectsHeight] = useState(0)
  const [skillsHeight, setSkillsHeight] = useState(0)
  useEffect(() => {
    if (adminInfoRef.current != null) {
      setAdminHeight(adminInfoRef.current.offsetHeight)
    }
    if (projectsRef.current != null) {
      setProjectsHeight(projectsRef.current.offsetHeight)
    }
    if (skillsRef.current != null) {
      setSkillsHeight(skillsRef.current.offsetHeight)
    }
  }, [adminInfoRef, projectsRef, skillsRef])

  return { adminHeight, projectsHeight, skillsHeight, adminInfoRef, projectsRef, skillsRef }
}

export default useHeightRef
