import Apprenticeship from '@/components/Apprenticeship'
import Introduction from '@/components/Introduction'
import Header from '@/components/Header'
import Tips from '@/components/Tips'

export default function Home() {
  return (
    <main className="flex flex-col gap-[208px]">
      <Header />
      <Introduction />
      <Tips />
      <Apprenticeship />
      <hr className="h-[1px] w-full max-w-[1600] border-none bg-input-color" />
    </main>
  )
}
