import Introduction from '@/components/Introduction'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex flex-col gap-[208px] p-8">
      <Header />
      <Introduction />
    </main>
  )
}
