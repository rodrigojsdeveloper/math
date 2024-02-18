'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { ContextDataProps } from '../interfaces'

export const Context = createContext({} as ContextDataProps)

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined'
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1

  const [selectedOperator, setSelectedOperator] = useState<string>(() => {
    const operatorOnStorage =
      isBrowser && localStorage.getItem('Mathematical: Operator')

    if (operatorOnStorage) {
      return operatorOnStorage
    }

    return ''
  })
  const [random1, setRandom1] = useState(generateRandomNumber())
  const [random2, setRandom2] = useState(generateRandomNumber())
  const [border, setBorder] = useState<string>('')
  const [isOperatorSelected, setIsOperatorSelected] = useState<boolean>(true)

  const handleSelectedOperator = (operator: string) => {
    setIsOperatorSelected(false)
    setSelectedOperator(operator)

    localStorage.setItem('Mathematical: Operator', operator)
  }

  const getOperator = () => {
    switch (selectedOperator) {
      case 'Addition':
        return '+'
      case 'Subtraction':
        return '-'
      case 'Division':
        return '÷'
      case 'Multiply':
        return 'x'
      default:
        return ''
    }
  }

  const handleVerifyRequest = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    let result
    const operator = getOperator()

    if (operator === '+') {
      result = random1 + random2
    }

    if (operator === '-') {
      result = random1 - random2
    }

    if (operator === '÷') {
      result = random1 / random2
    }

    if (operator === 'x') {
      result = random1 * random2
    }

    const sum = +value === result

    if (sum) {
      setTimeout(() => setBorder('border-green-400'), 1500)
    } else {
      setTimeout(() => setBorder('border-red-400'), 1500)
    }
  }

  const handleRandom = () => {
    setRandom1(generateRandomNumber())
    setRandom2(generateRandomNumber())
    setBorder('border-input-color')
  }

  useEffect(() => {
    setRandom1(generateRandomNumber())
    setRandom2(generateRandomNumber())
  }, [])

  const cityContextData: ContextDataProps = {
    selectedOperator,
    handleSelectedOperator,
    getOperator,
    handleVerifyRequest,
    handleRandom,
    random1,
    random2,
    border,
    isOperatorSelected,
  }

  return <Context.Provider value={cityContextData}>{children}</Context.Provider>
}
