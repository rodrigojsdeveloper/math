import { Operators } from '@/svgs/operators'
import { Pencil } from '@/svgs/pencil'
import { Lamp } from '@/svgs/lamp'
import { Tip } from './tip'

export const Tips = () => {
  return (
    <section className="w-full bg-section-color px-4 py-12">
      <ul className="flex flex-col items-center gap-x-6 gap-y-12 md:flex-row md:flex-wrap md:justify-center">
        <div className="flex flex-col items-center gap-x-6 gap-y-12 md:flex-row md:flex-wrap md:justify-center">
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
        </div>
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
