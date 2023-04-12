import { getSkill } from './skills'
import { Project } from './types'

const projects: Project[] = [
  {
    id: 1,
    name: 'NBA Web App',
    description: 'Decidi hacer una app de la NBA ya que es algo que me encanta y me sirvio de motivación para aprender Next.js con Typescript.',
    images: {
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680974090/portfolio-projects/NBA-Desktop_es7cnd.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680974098/portfolio-projects/NBA-Mobile_l1ltmw.png'
    },
    colors: ['#000', '#222', '#333'],
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
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680974072/portfolio-projects/MOVIES-Desktop_j7bu6z.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1680974080/portfolio-projects/MOVIES-Mobile_t8ksfy.png'
    },
    colors: ['#000', '#222', '#333'],
    backendRepo: null,
    frontEndRepo: 'https://github.com/tomasherrera1910/movies_homepage',
    deployURL: 'https://lovely-moonbeam-3fa776.netlify.app/',
    technologies: [getSkill('Javascript'), getSkill('CSS'), getSkill('React')]
  },
  {
    id: 3,
    name: 'Weather APP',
    description: 'APP básica, pero que estaba mas que nada enfocada en aprender Next.js usando SSR y en dar mis primeros pasos en el Testing.',
    images: {
      desktop: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681048822/portfolio-projects/WEATHER-Desktop_lnzem7.png',
      mobile: 'https://res.cloudinary.com/dxtmgc2ja/image/upload/v1681048810/portfolio-projects/WEATHER-Mobile_lrkbcn.png'
    },
    colors: ['#000', '#222', '#333'],
    backendRepo: null,
    frontEndRepo: 'https://github.com/tomasherrera1910/weatherapp-nextjs',
    deployURL: 'https://weatherapp-nextjs.vercel.app/',
    technologies: [getSkill('Javascript'), getSkill('CSS'), getSkill('React'), getSkill('Next.js'), getSkill('Cypress'), getSkill('React Testing Library'), getSkill('Jest')]
  }
]

export async function getProjects () {
  return projects
}
