import { ITipProps } from '@/interfaces'

const Tip = ({ children, title, description }: ITipProps) => {
  return (
    <li className="flex flex-col items-center gap-6 sm:flex-row">
      {children}

      <div className="flex flex-col gap-2 text-center sm:text-start">
        <h2 className="text-base font-semibold sm:text-lg">{title}</h2>
        <p className="w-full max-w-[300px] text-sm sm:text-base">
          {description}
        </p>
      </div>
    </li>
  )
}

export default Tip
