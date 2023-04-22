import { getSkill } from '../utils/skills'
import { Project } from '../utils/types'

export const projectsEs: Project[] = [
  {
    id: 1,
    name: 'NBA',
    description: 'Decidi hacer una app de la NBA ya que es algo que me encanta y me sirvio de motivación para aprender Next.js con Typescript.',
    images: {
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681656807/portfolio-projects/NBA-DESKTOP_xdyiq2.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681656807/portfolio-projects/NBA-MOBILE_wusdh4.png'
    },
    backendRepo: null,
    frontEndRepo: 'https://github.com/tomasherrera1910/nba-webapp',
    deployURL: 'http://nba-webapp.vercel.app/',
    technologies: [getSkill('Typescript'), getSkill('Next.js'), getSkill('React'), getSkill('CSS'), getSkill('Cypress')]
  },
  {
    id: 2,
    name: 'Movies Web',
    description: 'Esto fue un challenge, que habia que seguir un diseño y quede bastante conforme tanto con la funcionalidad, como con el resultado final.',
    images: {
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681656807/portfolio-projects/MOVIES-DESKTOP_n09tau.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681656807/portfolio-projects/MOVIES-MOBILE_m3dapq.png'
    },
    backendRepo: null,
    frontEndRepo: 'https://github.com/tomasherrera1910/movies_homepage',
    deployURL: 'https://lovely-moonbeam-3fa776.netlify.app/',
    technologies: [getSkill('Javascript'), getSkill('CSS'), getSkill('React')]
  },
  {
    id: 3,
    name: 'Clima APP',
    description: 'APP básica, pero que estaba mas que nada enfocada en aprender Next.js usando SSR y en dar mis primeros pasos en el Testing.',
    images: {
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681656807/portfolio-projects/WEATHER-DESKTOP_xqi9zk.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681656806/portfolio-projects/WEATHER-MOBILE_kurija.png'
    },
    backendRepo: null,
    frontEndRepo: 'https://github.com/tomasherrera1910/weatherapp-nextjs',
    deployURL: 'https://weatherapp-nextjs.vercel.app/',
    technologies: [getSkill('Javascript'), getSkill('CSS'), getSkill('React'), getSkill('Next.js'), getSkill('Cypress'), getSkill('React Testing Library'), getSkill('Jest')]
  },
  {
    id: 4,
    name: 'Always Alert',
    description: 'APP Desarrollada en equipo en el seleccionado 7 de No Country.',
    images: {
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1682090308/portfolio-projects/AlwaysAlert-landing_o2zrpi.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1682033634/portfolio-projects/Mockup_home_ikrtx1.png'
    },
    backendRepo: 'https://github.com/No-Country/s7-28-m-reactnative/tree/main/api',
    frontEndRepo: 'https://github.com/No-Country/s7-28-m-reactnative/tree/main/app',
    deployURL: 'https://alwaysalertlanding.netlify.app/',
    technologies: [getSkill('Javascript'), getSkill('Tailwind CSS'), getSkill('React Native'), getSkill('Node.js'), getSkill('MongoDB'), getSkill('Express')]
  }
]
