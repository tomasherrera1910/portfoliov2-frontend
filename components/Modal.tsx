interface Props {
  open: boolean
  children: React.ReactNode | React.ReactNode[]
}
export default function Modal ({ open, children }: Props): JSX.Element {
  return (
    <dialog open={open} className={`fixed top-0 left-0 w-screen h-screen z-40 bg-black bg-opacity-60 ${open ? 'flex justify-center items-center' : ''}`}>
      {children}
    </dialog>
  )
}
