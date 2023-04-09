interface Props {
  name: string
  description?: string
}
export default function ProjectHeader ({ name, description }: Props): JSX.Element {
  return (
    <section>
      <h3 className='font-roboto font-semibold text-4xl'>{name}</h3>
      <p className='font-barlow font-extralight max-w-sm opacity-80 text-sm'>{description}</p>
    </section>
  )
}
