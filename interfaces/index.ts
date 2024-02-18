export interface ITipProps {
  children: React.ReactNode
  title: string
  description: string
}

export interface IOperator {
  children: React.ReactNode
  title: string
  isSelected: boolean
  onSelect: () => void
}

export interface IGoBack {
  href: string
}

export interface ContextDataProps {
  selectedOperator: string
  handleSelectedOperator: (operator: string) => void
  getOperator: () => string
  handleVerifyRequest: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleRandom: () => void
  random1: number
  random2: number
  border: string
}
