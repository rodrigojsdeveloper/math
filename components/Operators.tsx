'use client'

import { useState } from 'react'
import Subtraction from '@/svgs/Subtraction'
import Division from '@/svgs/Division'
import Addition from '@/svgs/Addition'
import Multiply from '@/svgs/Multiply'
import Operator from './Operator'

const Operators = () => {
  const [selectedOperator, setSelectedOperator] = useState<string>('')

  const handleSelectOperator = (operator: string) => {
    setSelectedOperator(operator)
  }

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-section-color p-6">
      <h3 className="text-sm font-semibold sm:text-base">Operator type:</h3>

      <ul className="flex gap-4">
        <Operator
          title="Addition"
          isSelected={selectedOperator === 'Addition'}
          onSelect={() => handleSelectOperator('Addition')}
        >
          <Addition />
        </Operator>
        <Operator
          title="Subtraction"
          isSelected={selectedOperator === 'Subtraction'}
          onSelect={() => handleSelectOperator('Subtraction')}
        >
          <Subtraction />
        </Operator>
      </ul>
      <ul className="flex gap-4">
        <Operator
          title="Division"
          isSelected={selectedOperator === 'Division'}
          onSelect={() => handleSelectOperator('Division')}
        >
          <Division />
        </Operator>
        <Operator
          title="Multiply"
          isSelected={selectedOperator === 'Multiply'}
          onSelect={() => handleSelectOperator('Multiply')}
        >
          <Multiply />
        </Operator>
      </ul>
    </div>
  )
}

export default Operators
