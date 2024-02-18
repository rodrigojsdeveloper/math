import { OperatorProps } from '@/interfaces'

export const Operator = ({
  title,
  children,
  isSelected,
  onSelect,
}: OperatorProps) => {
  return (
    <li
      onClick={onSelect}
      className={`flex h-[6.5rem] w-full max-w-[26.125rem] cursor-pointer border border-solid ${isSelected ? 'cursor-default border-primary-color opacity-50' : 'border-background-color'} flex-row items-center justify-center gap-8 rounded-xl bg-background-color px-5 py-2.5 sm:justify-start`}
    >
      {children}
      <p className="hidden sm:block">{title}</p>
    </li>
  )
}
