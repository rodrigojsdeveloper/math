import Introduction from '@/components/Introduction'
import Header from '@/components/Header'
import Tips from '@/components/Tips'

export default function Home() {
  return (
    <main className="flex flex-col gap-[208px]">
      <Header />
      <Introduction />
      <Tips />
    </main>
  )
}
