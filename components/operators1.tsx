'use client'

import { useContext } from 'react'
import { Subtraction } from '@/svgs/subtraction1'
import { Division } from '@/svgs/division1'
import { Addition } from '@/svgs/addition1'
import { Multiply } from '@/svgs/multiply1'
import { Operator } from './operator1'
import { Context } from '@/contexts/context'

export const Operators = () => {
  const { selectedOperator, handleSelectedOperator } = useContext(Context)

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-section-color p-6">
      <h3 className="text-sm font-semibold sm:text-base">Operator type:</h3>

      <ul className="flex gap-4">
        <Operator
          title="Addition"
          isSelected={selectedOperator === 'Addition'}
          onSelect={() => handleSelectedOperator('Addition')}
        >
          <Addition />
        </Operator>
        <Operator
          title="Subtraction"
          isSelected={selectedOperator === 'Subtraction'}
          onSelect={() => handleSelectedOperator('Subtraction')}
        >
          <Subtraction />
        </Operator>
      </ul>
      <ul className="flex gap-4">
        <Operator
          title="Division"
          isSelected={selectedOperator === 'Division'}
          onSelect={() => handleSelectedOperator('Division')}
        >
          <Division />
        </Operator>
        <Operator
          title="Multiply"
          isSelected={selectedOperator === 'Multiply'}
          onSelect={() => handleSelectedOperator('Multiply')}
        >
          <Multiply />
        </Operator>
      </ul>
    </div>
  )
}
