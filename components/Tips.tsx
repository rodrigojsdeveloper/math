import Operators from '@/svgs/Operators'
import Pencil from '@/svgs/Pencil'
import Lamp from '@/svgs/Lamp'
import Tip from './Tip'

const Tips = () => {
  return (
    <section className="w-full bg-section-color px-4 py-12">
      <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-12">
        <Tip
          title="Choose an operator"
          description="Choose from 4 basic mathematical operators to practice"
        >
          <Operators />
        </Tip>
        <Tip
          title="Practice with exercises"
          description="Practice is very important for learning"
        >
          <Pencil />
        </Tip>
        <Tip
          title="Tip and Help"
          description="Tools to help you during exercises"
        >
          <Lamp />
        </Tip>
      </ul>
    </section>
  )
}

export default Tips
