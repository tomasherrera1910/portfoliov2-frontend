export function Footer (): JSX.Element {
  return (
        <footer className="bg-[#111] text-white py-2 flex flex-col items-center font-roboto">
            <section className="flex max-w-3xl items-center justify-center">
                <p className="flex text-sm gap-1 text-gray-300 items-center justify-center flex-wrap">Designed and developed by
                    <a href="https://www.linkedin.com/in/mauro-tomas-herrera/" target="_blank" rel="noreferrer" className="text-white font-bold text-base hover:underline">Tomás Herrera</a>
                    <span className="font-barlow font-semibold text-xs">2022-2023</span>
                </p>
            </section>
        </footer>
  )
}
