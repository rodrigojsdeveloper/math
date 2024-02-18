import { Apprenticeship } from '@/components/apprenticeship1'
import { Introduction } from '@/components/introduction1'
import { Footer } from '@/components/footer1'
import { Tips } from '@/components/tips1'

export default function Home() {
  return (
    <main className="flex flex-col gap-[13rem]">
      <Introduction />
      <Tips />
      <div className="flex flex-col gap-[9.25rem] px-6">
        <Apprenticeship />
        <Footer />
      </div>
    </main>
  )
}
