interface Props {
  name: string
  description?: string
}
export default function ProjectHeader ({ name, description }: Props): JSX.Element {
  return (
    <section>
      <h3 data-aos='flip-left' className='font-roboto text-center sm:text-start font-semibold text-4xl'>{name}</h3>
      <p data-aos='flip-right' className='font-barlow dark:font-extralight font-normal max-w-sm opacity-80 dark:opacity-60 text-lg'>{description}</p>
    </section>
  )
}
