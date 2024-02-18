export interface TipProps {
  children: React.ReactNode
  title: string
  description: string
}

export interface OperatorProps {
  children: React.ReactNode
  title: string
  isSelected: boolean
  onSelect: () => void
}

export interface GoBackProps {
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
  isOperatorSelected: boolean
}
