import { IOperator } from '@/interfaces'

const Operator = ({ title, children, isSelected, onSelect }: IOperator) => {
  return (
    <li
      onClick={onSelect}
      className={`flex h-[104px] w-full max-w-[418px] cursor-pointer border border-solid ${isSelected ? 'cursor-default border-primary-color opacity-50' : 'border-background-color'} flex-row items-center gap-8 rounded-xl bg-background-color px-5 py-2.5`}
    >
      {children}
      <p>{title}</p>
    </li>
  )
}

export default Operator
