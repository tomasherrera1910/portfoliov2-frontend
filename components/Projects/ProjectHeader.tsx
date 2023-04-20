interface Props {
  name: string
  description?: string
}
export default function ProjectHeader ({ name, description }: Props): JSX.Element {
  return (
    <section>
      <h3 data-aos='fade-down' className='font-roboto text-center sm:text-start font-semibold text-4xl'>{name}</h3>
      <p data-aos='fade-up' className='font-barlow dark:font-extralight dark:text-gray-400 font-normal max-w-sm opacity-60 text-lg'>{description}</p>
    </section>
  )
}
