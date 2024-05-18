import { Apprenticeship } from '@/components/apprenticeship'
import { Introduction } from '@/components/introduction'
import { Footer } from '@/components/footer'
import { Tips } from '@/components/tips'

export default function Home() {
  return (
    <main className="flex flex-col gap-[13rem]">
      <Introduction />
      <Tips />
      <section className="mx-auto flex w-full max-w-[100rem] flex-col gap-[9.25rem] px-4">
        <Apprenticeship />
        <Footer />
      </section>
    </main>
  )
}
