import Apprenticeship from '@/components/Apprenticeship'
import Introduction from '@/components/Introduction'
import Header from '@/components/Header'
import Tips from '@/components/Tips'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col gap-[208px]">
      <Header />
      <Introduction />
      <Tips />
      <div className="flex flex-col gap-[148px] px-6">
        <Apprenticeship />
        <Footer />
      </div>
    </main>
  )
}
