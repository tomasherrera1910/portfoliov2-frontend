interface Props {
  name: string
  description?: string
}
export default function ProjectHeader ({ name, description }: Props): JSX.Element {
  return (
    <section>
      <h3 className='font-semibold text-3xl'>{name}</h3>
      <p className='max-w-sm opacity-80 text-sm'>{description}</p>
    </section>
  )
}
