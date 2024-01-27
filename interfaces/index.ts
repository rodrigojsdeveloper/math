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
