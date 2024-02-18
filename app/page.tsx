import { Apprenticeship } from '@/components/Apprenticeship'
import { Introduction } from '@/components/Introduction'
import { Footer } from '@/components/Footer'
import { Tips } from '@/components/Tips'

export default function Home() {
  return (
    <main className="flex flex-col gap-[208px]">
      <Introduction />
      <Tips />
      <div className="flex flex-col gap-[148px] px-6">
        <Apprenticeship />
        <Footer />
      </div>
    </main>
  )
}
