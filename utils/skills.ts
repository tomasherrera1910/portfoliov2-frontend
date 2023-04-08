import { Skill, SkillName } from './types'

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Javascript',
    imageURL: 'https://cdn.svgporn.com/logos/javascript.svg',
    technology: 'Frontend/Backend'
  },
  {
    id: 2,
    name: 'Typescript',
    imageURL: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
    technology: 'Frontend/Backend'
  },
  {
    id: 3,
    name: 'HTML',
    imageURL: 'https://cdn.svgporn.com/logos/html-5.svg',
    technology: 'Frontend'
  },
  {
    id: 4,
    name: 'CSS',
    imageURL: 'https://cdn.svgporn.com/logos/css-3.svg',
    technology: 'Frontend'
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    imageURL: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
    technology: 'Frontend'
  },
  {
    id: 6,
    name: 'React',
    imageURL: 'https://cdn.svgporn.com/logos/react.svg',
    technology: 'Frontend'
  },
  {
    id: 7,
    name: 'React Native',
    imageURL: 'https://cdn.svgporn.com/logos/react.svg',
    technology: 'Frontend'
  },
  {
    id: 8,
    name: 'Next.js',
    imageURL: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
    technology: 'Frontend'
  },
  {
    id: 9,
    name: 'Node.js',
    imageURL: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
    technology: 'Backend'
  },
  {
    id: 10,
    name: 'Express',
    imageURL: 'https://cdn.svgporn.com/logos/express.svg',
    technology: 'Backend'
  },
  {
    id: 11,
    name: 'PostgreSQL',
    imageURL: 'https://cdn.svgporn.com/logos/postgresql.svg',
    technology: 'Database/ORM'
  },
  {
    id: 12,
    name: 'MySQL',
    imageURL: 'https://cdn.svgporn.com/logos/mysql-icon.svg',
    technology: 'Database/ORM'
  },
  {
    id: 13,
    name: 'MongoDB',
    imageURL: 'https://cdn.svgporn.com/logos/mongodb-icon.svg',
    technology: 'Database/ORM'
  },
  {
    id: 14,
    name: 'Sequelize',
    imageURL: 'https://cdn.svgporn.com/logos/sequelize.svg',
    technology: 'Database/ORM'
  },
  {
    id: 15,
    name: 'Cypress',
    imageURL: 'https://cdn.svgporn.com/logos/cypress-icon.svg',
    technology: 'Testing'
  },
  {
    id: 16,
    name: 'React Testing Library',
    imageURL: 'https://cdn.svgporn.com/logos/testing-library.svg',
    technology: 'Testing'
  },
  {
    id: 17,
    name: 'Vitest',
    imageURL: 'https://cdn.svgporn.com/logos/vitest.svg',
    technology: 'Testing'
  },
  {
    id: 18,
    name: 'Jest',
    imageURL: 'https://cdn.svgporn.com/logos/jest.svg',
    technology: 'Testing'
  }
]

export async function getSkills () {
  return skills
}

export function getSkill (name: SkillName): Skill {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return skills.find(skill => name === skill.name)!
}
