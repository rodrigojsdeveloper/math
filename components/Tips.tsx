import Operators from '@/svgs/Operators'
import Pencil from '@/svgs/Pencil'
import Lamp from '@/svgs/Lamp'
import Tip from './Tip'

const Tips = () => {
  return (
    <section className="w-full bg-section-color px-4 py-12">
      <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-12">
        <Tip
          title="Escolha um operador"
          description="Escolha entre os 4 operadores matemáticos básicos para praticar"
        >
          <Operators />
        </Tip>
        <Tip
          title="Pratique com exercícios"
          description="A prática é muito importante para o aprendizado"
        >
          <Pencil />
        </Tip>
        <Tip
          title="Dica e Ajuda"
          description="Ferramentas para te auxiliar durante os exercícios"
        >
          <Lamp />
        </Tip>
      </ul>
    </section>
  )
}

export default Tips
